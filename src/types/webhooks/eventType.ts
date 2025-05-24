/**
 * The different webhook event types your app can subscribe to.
 *
 * @see [Event Types](https://discord.com/developers/docs/events/webhook-events#event-types)
 *
 * @enum
 */
export enum EventType {
	/**
	 * Sent when an app was authorized by a user to a server or their account
	 */
	ApplicationAuthorized = "APPLICATION_AUTHORIZED",

	/**
	 * Entitlement was created
	 */
	EntitlementCreate = "ENTITLEMENT_CREATE",

	/**
	 * User was added to a Quest (currently unavailable)
	 *
	 * @deprecated
	 */
	QuestUserEnrollment = "QUEST_USER_ENROLLMENT"
}