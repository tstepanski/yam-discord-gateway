import {TEvent} from "../types/payloads";
import {GatewayDispatchEventPayload} from "../types";
import {ConnectionContract} from "./connectionContract";

export type DispatchOperationHandlerFunction<T extends TEvent> =
	(payload: GatewayDispatchEventPayload<T>, connection: ConnectionContract) => Promise<void>;