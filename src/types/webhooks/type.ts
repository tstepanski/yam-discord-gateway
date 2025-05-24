/**
 * Webhook Types
 *
 * @see [Webhook Types](https://discord.com/developers/docs/events/webhook-events#webhook-types)
 *
 * @enum
 */
export enum Type {
	/**
	 * PING event sent to verify your Webhook Event URL is active
	 */
	PING = 0,

	/**
	 * Webhook event (details for event in {@link EventBody event body} object)
	 */
	Event = 1
}