import {ConnectionContract} from "./connectionContract";
import {GatewayEventPayload, OpCode} from "../types";

export interface OperationHandler<T> {
	get opCode(): OpCode<T>;

	handleAsync(payload: GatewayEventPayload<T>, connection: ConnectionContract): Promise<void>;
}
