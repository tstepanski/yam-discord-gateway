import {ConnectionContract} from "./connectionContract";
import {OperationHandler} from "./operationHandler";
import {OperationHandlerFunction} from "./operationHandlerFunction";
import {GatewayEventPayload, OpCode} from "../types";

export class SimpleHandler<T> implements OperationHandler<T> {
	public constructor(private readonly opCodeInstance: OpCode<T>,
	                   private readonly handlerFunction: OperationHandlerFunction<T>) {
	}

	public get opCode(): OpCode<T> {
		return this.opCodeInstance;
	}

	public handleAsync(payload: GatewayEventPayload<T>, connection: ConnectionContract): Promise<void> {
		return this.handlerFunction(payload, connection);
	}
}