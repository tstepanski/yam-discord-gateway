import {Gateway, GatewayCloseEventCodes, GatewayEventPayload, OpCodes} from "../types";
import {ConnectionContract} from "./connectionContract";
import {OperationHandler} from "./operationHandler";
import {Secrets} from "./secrets";
import {doNothing, Reject, Resolve, Timespan, toLookup} from "../types/general";
import {Identify, IdentifyConnectionProperties, Intent} from "../types/payloads";
import {BackoffStrategy} from "./backoff";
import {FakeAbortSignal} from "../types/general/fakeAbortSignal";
import {ConnectionStateChangedCallback} from "./connectionStateChangedCallback";

export class Connection implements ConnectionContract {
	public heartbeatInterval: Timespan;
	public sequenceNumber: number | undefined;

	private readonly handlersByOpCode: Record<number, OperationHandler<any>[] | undefined>;
	private readonly stateChangeListeners: Set<ConnectionStateChangedCallback>;

	private websocket: WebSocket | undefined = undefined;
	private closeRequested: boolean = false;
	private cachedGateway: Gateway | undefined;
	private sentIntents: boolean;

	public constructor(handlers: OperationHandler<any>[],
	                   private readonly desiredIntents: Intent,
	                   private readonly identifyConnectionProperties: IdentifyConnectionProperties,
	                   private readonly secrets: Secrets,
	                   private readonly backoffStrategy: BackoffStrategy) {
		this.cachedGateway = undefined;
		this.sentIntents = false;
		this.sequenceNumber = undefined;
		this.heartbeatInterval = Timespan.fromSeconds(1);
		this.handlersByOpCode = toLookup(handlers, handler => handler.opCode.code);
		this.stateChangeListeners = new Set<ConnectionStateChangedCallback>();
	}

	public get isConnected(): boolean {
		return this.websocket?.readyState === WebSocket.OPEN;
	}

	public addConnectionStateChangeListener(callback: (state: boolean) => Promise<void>): void {
		this.stateChangeListeners.add(callback);
	}

	public removeConnectionStateChangeListener(callback: (state: boolean) => Promise<void>): void {
		this.stateChangeListeners.delete(callback);
	}

	public sendAsync<T>(payload: GatewayEventPayload<T>): Promise<void> {
		if (!this.websocket) {
			return Promise.reject("Connection is not started");
		}

		const json = JSON.stringify(payload);

		this.websocket.send(json);

		return Promise.resolve();
	}

	public async startAsync(abortSignal?: AbortSignal): Promise<void> {
		let reconnect: boolean = true;
		abortSignal ??= new FakeAbortSignal();

		this.backoffStrategy.reset();

		while (reconnect && !this.closeRequested) {
			abortSignal.throwIfAborted();

			console.debug("Attempting (re)connect to gateway...");

			try {
				reconnect = await this.connectAsync(abortSignal);
			} catch (exception: any) {
				console.error(`Connection error`, exception);
			}

			await this.backoffStrategy.delayAsync(abortSignal);
		}
	}

	public async stopAsync(): Promise<void> {
		let websocket: WebSocket | undefined = this.websocket;

		if (!websocket) {
			return;
		}

		websocket.onmessage = null;
		websocket.onclose = null;

		this.closeRequested = true;
		this.sentIntents = false;

		if (websocket.readyState !== WebSocket.CLOSED) {
			await Connection.closeAsync(websocket);
		}

		this.websocket = undefined;

		await this.notifyStateChangeAsync(false);
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

	private async notifyStateChangeAsync(state: boolean): Promise<void> {
		const tasks = this.stateChangeListeners
			.keys()
			.map(callback => callback(state));

		await Promise.all(tasks);
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

	private async connectAsync(abortSignal: AbortSignal): Promise<boolean> {
		const gateway = await this.getGatewayAsync();

		abortSignal.throwIfAborted();

		return await new Promise<boolean>((givenResolve, givenReject) => {
			const {reject, resolve} = Connection.createWrappedCallbacks(givenResolve, givenReject);

			this.websocket = new WebSocket(`${gateway.url}?v=10&encoding=json`);
			this.websocket.onopen = () => this.notifyStateChangeAsync(true);
			this.websocket.onmessage = event => this.onWebSocketMessageReceivedAsync(event, reject);
			this.websocket.onclose = event => this.onWebSocketClose(event, resolve, reject);
		});
	}

	private async onWebSocketClose(event: CloseEvent, resolve: Resolve, reject: Reject): Promise<void> {
		try {
			const reconnect = this.getIfShouldReconnect(event);

			this.websocket = undefined;

			await this.notifyStateChangeAsync(false);

			resolve(reconnect);
		} catch (exception: unknown) {
			reject(exception);
		}
	}

	private async onWebSocketMessageReceivedAsync(event: MessageEvent<string>, reject: Reject): Promise<void> {
		const eventPayload = JSON.parse(event.data) as GatewayEventPayload<any>;

		this.sequenceNumber = eventPayload.s ?? this.sequenceNumber;

		try {
			await this.notifyHandlersAsync(eventPayload);
		} catch (exception: unknown) {
			reject(exception);
		}
	}

	private static createWrappedCallbacks(resolve: Resolve, reject: Reject): { reject: Reject, resolve: Resolve } {
		let wrappedResolve: Resolve;
		let wrappedReject: Reject;

		const unset = (): void => {
			wrappedReject = doNothing;
			wrappedResolve = doNothing;
		};

		wrappedResolve = Connection.createWrappedCallback(unset, resolve);
		wrappedReject = Connection.createWrappedCallback(unset, reject);

		return {
			reject: wrappedReject,
			resolve: wrappedResolve
		};
	}

	private static createWrappedCallback<T>(unset: () => void, callback: (value: T) => void): (value: T) => void {
		return (value: T): void => {
			unset();

			callback(value);
		};
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