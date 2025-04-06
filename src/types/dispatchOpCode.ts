import {TEvent, EventTypeMap} from "./payloads";
import {OpCode} from "./opCode";

/**
 * @inheritDoc
 */
export interface DispatchOpCode<T extends TEvent> extends OpCode<EventTypeMap[T]> {
	code: 0;

	client: false;

	gateway: true;
}