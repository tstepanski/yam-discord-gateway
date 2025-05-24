import {Payload} from "./payload";
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
export interface PingPayload extends Payload {
	/**
	 * @inheritDoc
	 */
	type: Type.PING;

	/**
	 * Undefined for {@link Type.PING Ping}
	 *
	 * @deprecated
	 */
	event?: undefined;
}