import {InternalOperationHandler} from "./internalOperationHandler";
import {Connection} from "./connection";
import {GatewayEventPayload, OpCode, OpCodes} from "../types";
import {Heartbeat} from "../types/payloads";

export class AbstractHeartbeatHandler<TData> implements InternalOperationHandler<TData, Connection> {
	protected constructor(private readonly opCodeInstance: OpCode<TData>,
	                      private readonly sendImmediately: boolean = false) {
	}

	public get opCode(): OpCode<TData> {
		return this.opCodeInstance;
	}

	public async handleAsync(payload: GatewayEventPayload<TData>, connection: Connection): Promise<void> {
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
		return new Promise<void>((resolve, reject) => {
			const intervalWithJitter = connection.heartbeatInterval.totalMilliseconds * Math.random();

			setTimeout(() => {
				connection
					.sendAsync(outgoingPayload)
					.then(() => resolve())
					.catch(error => reject(error));
			}, intervalWithJitter);
		});
	}
}