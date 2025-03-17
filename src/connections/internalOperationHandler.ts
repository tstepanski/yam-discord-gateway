import {ConnectionContract} from "./connectionContract";
import {OperationHandler} from "./operationHandler";
import {GatewayEventPayload} from "../types";

export interface InternalOperationHandler<TData, TConnection extends ConnectionContract>
	extends OperationHandler<TData> {

	handleAsync(payload: GatewayEventPayload<TData>, connection: TConnection): Promise<void>;
}