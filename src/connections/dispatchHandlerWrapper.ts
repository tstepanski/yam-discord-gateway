import {GatewayDispatchEventPayload, GatewayEventPayload, OpCode, OpCodes} from "../types";
import {ConnectionContract} from "./connectionContract";
import {toLookup} from "../types/general";
import {TEvent} from "../types/payloads";
import {DispatchOperationHandler} from "./dispatchOperationHandler";
import {OperationHandler} from "./operationHandler";
import {SimpleDispatchHandler} from "./simpleDispatchHandler";

export class DispatchHandlerWrapper implements OperationHandler<any> {
	private readonly dispatchHandlersByEventName: Record<TEvent, DispatchOperationHandler<any>[] | undefined>;

	public constructor(dispatchHandlers: DispatchOperationHandler<any>[]) {
		this.dispatchHandlersByEventName = toLookup(dispatchHandlers, handler => handler.event);
	}

	public async handleAsync(payload: GatewayEventPayload<any>, connection: ConnectionContract): Promise<void> {
		const dispatchPayload = payload as GatewayDispatchEventPayload<TEvent>;
		const handlers = this.dispatchHandlersByEventName[dispatchPayload.t];

		if (!handlers) {
			return;
		}

		const tasks = handlers.map(async handler => {
			const label = handler.constructor.name || "UnnamedDispatchHandler";
			const simpleDispatchHandler: SimpleDispatchHandler<any> = handler as SimpleDispatchHandler<any>;

			console.time(`DispatchHandler ${label} - ${simpleDispatchHandler.event} | ${simpleDispatchHandler.opCode}`);

			await handler.handleAsync(dispatchPayload, connection);

			console.timeEnd(`DispatchHandler ${label}`);
		});

		await Promise.all(tasks);
	}


	public get opCode(): OpCode<any> {
		// @ts-ignore
		return OpCodes.Dispatch;
	}
}