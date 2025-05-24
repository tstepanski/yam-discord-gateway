import {EventType} from "./eventType";
import {ApplicationAuthorized} from "./applicationAuthorized";
import {Entitlement} from "../entitlements";

/**
 * @see [Event Types](https://discord.com/developers/docs/events/webhook-events#event-types)
 *
 * @interface
 */
export interface EventTypeMap {
	/**
	 * `APPLICATION_AUTHORIZED` is sent when the app is added to a server or user account.
	 */
	[EventType.ApplicationAuthorized]: ApplicationAuthorized;

	/**
	 * `ENTITLEMENT_CREATE` is sent when an {@link Entitlement} is created when a user purchases or is otherwise granted
	 * one of your app's SKUs. Refer to the
	 * [Monetization documentation](https://discord.com/developers/docs/monetization/overview) for details.
	 */
	[EventType.EntitlementCreate]: Entitlement;

	/**
	 * `QUEST_USER_ENROLLMENT` is sent when a user is added to a Quest on Discord.
	 *
	 * @remarks This event cannot be received by apps at this time. It's documented because it appears on the Webhooks
	 * settings page.
	 *
	 * @deprecated
	 */
	[EventType.QuestUserEnrollment]: undefined;
}

export type TEvent = EventType & keyof EventTypeMap;