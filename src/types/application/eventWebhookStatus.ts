/**
 * Status indicating whether event webhooks are enabled or disabled for an application.
 *
 * @see [Application Event Webhook Status](https://discord.com/developers/docs/resources/application#application-object-application-event-webhook-status)
 *
 * @enum
 */
export enum EventWebhookStatus {
	/**
	 * Webhook events are disabled by developer
	 */
	DISABLED = 1,

	/**
	 * Webhook events are enabled by developer
	 */
	ENABLED = 2,

	/**
	 * Webhook events are disabled by Discord, usually due to inactivity
	 */
	DISABLED_BY_DISCORD = 3
}