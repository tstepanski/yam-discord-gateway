import {ConnectionContract} from "./connectionContract";
import {DispatchOpCode, GatewayDispatchEventPayload, OpCodes} from "../types";
import {TEvent} from "../types/payloads";
import {DispatchOperationHandlerFunction} from "./dispatchOperationHandlerFunction";
import {DispatchOperationHandler} from "./dispatchOperationHandler";

export class SimpleDispatchHandler<T extends TEvent> implements DispatchOperationHandler<T> {
	public constructor(private readonly eventToListen: T,
	                   private readonly handlerFunction: DispatchOperationHandlerFunction<T>) {
	}

	public get event(): T {
		return this.eventToListen;
    }

	public get opCode(): DispatchOpCode<T> {
		// @ts-ignore
		return OpCodes.Dispatch;
	}

	public handleAsync(payload: GatewayDispatchEventPayload<T>, connection: ConnectionContract): Promise<void> {
		return this.handlerFunction(payload, connection);
	}
}