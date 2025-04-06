import {EventTypeMap, TEvent} from "./payloads";
import {GatewayEventPayload} from "./gatewayEventPayload";

/**
 * @inheritDoc
 */
export interface GatewayDispatchEventPayload<T extends TEvent>
	extends GatewayEventPayload<EventTypeMap[T]> {
	op: 0;

	s: number;

	t: T;
}