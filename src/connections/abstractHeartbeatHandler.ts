import {InternalOperationHandler} from "./internalOperationHandler";
import {Connection} from "./connection";
import {GatewayEventPayload, OpCode, OpCodes} from "../types";
import {Heartbeat} from "../types/payloads";
import {doNothing, Reject, Resolve} from "../types/general";
import {ConnectionStateChangedCallback} from "./connectionStateChangedCallback";

export class AbstractHeartbeatHandler<TData> implements InternalOperationHandler<TData, Connection> {
	protected constructor(private readonly opCodeInstance: OpCode<TData>,
	                      private readonly sendImmediately: boolean = false) {
	}

	public get opCode(): OpCode<TData> {
		return this.opCodeInstance;
	}

	public async handleAsync(payload: GatewayEventPayload<TData>, connection: Connection): Promise<void> {
		if (!connection.isConnected) {
			return;
		}

		await this.internalHandleAsync(payload, connection);

		const outgoingPayload = <GatewayEventPayload<Heartbeat | null>>{
			op: OpCodes.Heartbeat.code,
			d: connection.sequenceNumber ?? null
		};

		if (this.sendImmediately) {
			await connection.sendAsync(outgoingPayload);
		} else {
			await this.sendDelayed(connection, outgoingPayload);
		}
	}

	// @ts-ignore
	protected internalHandleAsync(payload: GatewayEventPayload<TData>, connection: Connection): Promise<void> {
		return Promise.resolve();
	}

	private sendDelayed(connection: Connection, outgoingPayload: GatewayEventPayload<Heartbeat | null>): Promise<void> {
		let resolve: Resolve = doNothing;
		let reject: Reject = doNothing;

		const promise = new Promise<void>((givenResolve, givenReject) => {
			resolve = givenResolve;
			reject = givenReject;
		});

		const intervalWithJitter = connection.heartbeatInterval.totalMilliseconds * Math.random();
		let clearTimeoutCallback: ConnectionStateChangedCallback;

		let timeoutId: any;

		clearTimeoutCallback = (state: boolean): Promise<void> => {
			if (!state) {
				clearTimeout(timeoutId);
			}

			connection.removeConnectionStateChangeListener(clearTimeoutCallback);

			return Promise.resolve();
		};

		connection.addConnectionStateChangeListener(clearTimeoutCallback);

		timeoutId = setTimeout(() => {
			if (!connection.isConnected) {
				return;
			}

			connection
				.sendAsync(outgoingPayload)
				.then(() => resolve())
				.catch(error => reject(error));
		}, intervalWithJitter);

		return promise;
	}
}