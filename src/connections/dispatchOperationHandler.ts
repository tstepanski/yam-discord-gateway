import {EventTypeMap, TEvent} from "../types/payloads";
import {DispatchOpCode, GatewayDispatchEventPayload} from "../types";
import {ConnectionContract} from "./connectionContract";
import {OperationHandler} from "./operationHandler";

export interface DispatchOperationHandler<T extends TEvent> extends OperationHandler<EventTypeMap[T]> {
	get event(): TEvent;

	get opCode(): DispatchOpCode<T>;

	handleAsync(payload: GatewayDispatchEventPayload<T>, connection: ConnectionContract): Promise<void>;
}