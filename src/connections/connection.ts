import {Gateway, GatewayCloseEventCodes, GatewayEventPayload, OpCodes} from "../types";
import {ConnectionContract} from "./connectionContract";
import {OperationHandler} from "./operationHandler";
import {Secrets} from "./secrets";
import {Timespan, toLookup} from "../types/general";
import {Identify, IdentifyConnectionProperties, Intent} from "../types/payloads";

export class Connection implements ConnectionContract {
	public heartbeatInterval: Timespan;
	public sequenceNumber: number | undefined;

	private readonly handlersByOpCode: Record<number, OperationHandler<any>[] | undefined>;

	private websocket: WebSocket | undefined = undefined;
	private closeRequested: boolean = false;
	private cachedGateway: Gateway | undefined;
	private sentIntents: boolean;

	public constructor(handlers: OperationHandler<any>[],
	                   private readonly desiredIntents: Intent,
	                   private readonly identifyConnectionProperties: IdentifyConnectionProperties,
	                   private readonly secrets: Secrets) {
		this.cachedGateway = undefined;
		this.sentIntents = false;
		this.sequenceNumber = undefined;
		this.heartbeatInterval = Timespan.fromSeconds(1);
		this.handlersByOpCode = toLookup(handlers, handler => handler.opCode.code);
	}

	public sendAsync<T>(payload: GatewayEventPayload<T>): Promise<void> {
		if (!this.websocket) {
			return Promise.reject("Connection is not started");
		}

		const json = JSON.stringify(payload);

		this.websocket.send(json);

		return Promise.resolve();
	}

	public async startAsync(): Promise<void> {
		let reconnect: boolean = true;

		while (reconnect && !this.closeRequested) {
			reconnect = await this.connectAsync();
		}
	}

	public async stopAsync(): Promise<void> {
		let websocket: WebSocket | undefined = this.websocket;

		if (!websocket) {
			throw new Error("Connection is not started");
		}

		websocket.onmessage = null;

		this.closeRequested = true;
		this.sentIntents = false;

		if (websocket.readyState !== WebSocket.CLOSED) {
			await Connection.closeAsync(websocket);
		}

		this.websocket = undefined;
	}

	public sendIdentificationAsync(): Promise<void> {
		if (this.sentIntents) {
			return Promise.resolve();
		}

		return this.sendAsync(<GatewayEventPayload<Identify>>{
			op: OpCodes.Identify.code,
			d: {
				token: this.secrets.discordToken,
				intents: this.desiredIntents,
				properties: this.identifyConnectionProperties
			}
		});
	}

	private async notifyHandlersAsync(eventPayload: GatewayEventPayload<any>): Promise<void> {
		const handlers = this.handlersByOpCode[eventPayload.op];

		if (!handlers) {
			return;
		}

		const tasks = handlers.map(handler => handler.handleAsync(eventPayload, this));

		await Promise.all(tasks);
	}

	private getIfShouldReconnect(event: CloseEvent): boolean {
		if (this.closeRequested) {
			this.closeRequested = false;

			return false;
		}

		const closeEventCode = GatewayCloseEventCodes.getByCode(event.code);

		if (closeEventCode.reconnect) {

			return true;
		}

		throw new Error(`Received ${closeEventCode.code}, will not attempt to reconnect`);
	}

	private async getGatewayAsync(): Promise<Gateway> {
		if (this.cachedGateway) {
			return this.cachedGateway;
		}

		const response = await fetch(`https://discord.com/api/v10/gateway`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json; charset=UTF-8"
			}
		});

		const content = await response.json();

		if (response.ok) {
			return this.cachedGateway = content;
		}

		const responseAsJson = JSON.stringify(content);

		throw new Error(`Request to Discord Gateway API failed with ${response.status}:\n${responseAsJson}`);
	}

	private async connectAsync(): Promise<boolean> {
		const gateway = await this.getGatewayAsync();

		return await new Promise<boolean>((resolve, reject) => {
			this.websocket = new WebSocket(`${gateway.url}?v=10&encoding=json`);

			this.websocket.onmessage = async (event: MessageEvent<string>): Promise<void> => {
				const eventPayload = JSON.parse(event.data) as GatewayEventPayload<any>;

				this.sequenceNumber = eventPayload.s ?? this.sequenceNumber;

				try {
					await this.notifyHandlersAsync(eventPayload);
				} catch (exception: any) {
					reject(exception);
				}
			};

			this.websocket.onclose = (event: CloseEvent): void => {
				try {
					const reconnect = this.getIfShouldReconnect(event);

					resolve(reconnect);
				} catch (exception: unknown) {
					reject(exception);
				}
			};
		});
	}

	private static closeAsync(websocket: WebSocket): Promise<void> {
		return new Promise<void>(resolve => {
			const handleClose = () => {
				websocket.removeEventListener("close", handleClose);

				resolve();
			};

			websocket.addEventListener("close", handleClose);

			if (websocket.readyState === WebSocket.OPEN || websocket.readyState === WebSocket.CONNECTING) {
				websocket.close();
			}
		});
	}
}