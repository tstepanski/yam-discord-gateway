import {Snowflake} from "../general";
import {Type} from "./type";

/**
 * Structure of the outer webhook payload
 *
 * @see [Payload Structure](https://discord.com/developers/docs/events/webhook-events#webhook-event-payloads)
 *
 * @interface
 */
export interface Payload {
	/**
	 * Version scheme for the webhook event. Currently, always 1
	 *
	 * @defaultValue 1
	 */
	version: number;

	/**
	 * ID of your app
	 */
	application: Snowflake;

	/**
	 * Type of webhook
	 */
	type: Type;

	/**
	 * Event data payload
	 *
	 * @returns undefined when `type` is `PING` (`0`) or {@link EventBody} when `type` is `Event` (`1`)
	 */
	event?: unknown;
}