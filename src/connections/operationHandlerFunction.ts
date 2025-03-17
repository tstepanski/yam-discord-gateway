import {ConnectionContract} from "./connectionContract";
import {GatewayEventPayload} from "../types";

export type OperationHandlerFunction<T> = (payload: GatewayEventPayload<T>,
                                           connection: ConnectionContract) => Promise<void>;