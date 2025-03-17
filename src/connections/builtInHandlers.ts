import {OperationHandler} from "./operationHandler";
import {HelloEventHandler} from "./helloEventHandler";
import {HeartbeatEventHandler} from "./heartbeatEventHandler";
import {HeartbeatAckEventHandler} from "./heartbeatAckEventHandler";

export const builtInHandlers: OperationHandler<any>[] = [
	new HelloEventHandler(),
	new HeartbeatEventHandler(),
	new HeartbeatAckEventHandler()
];
