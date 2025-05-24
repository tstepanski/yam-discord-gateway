import {Payload} from "./payload";
import {TEvent} from "./eventTypeMap";
import {Type} from "./type";

/**
 * @inheritDoc
 *
 * @typeParam T - The event type, constrained to be {@link TEvent}
 *
 * @see [Payload Structure](https://discord.com/developers/docs/events/webhook-events#webhook-event-payloads)
 *
 * @interface
 */
export interface EventPayload<T extends TEvent> extends Payload {
	/**
	 * @inheritDoc
	 */
	type: Type.Event;

	/**
	 * @inheritDoc
	 */
	event: EventPayload<T>;
}