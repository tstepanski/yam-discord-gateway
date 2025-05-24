import {IntegrationType} from "../application";
import {User} from "../users";
import {Scopes} from "../oauth2";
import {Guild} from "../guilds";

/**
 * `APPLICATION_AUTHORIZED` is sent when the app is added to a server or user account.
 *
 * @see [Application Authorized](https://discord.com/developers/docs/events/webhook-events#application-authorized)
 *
 * @example
 * {
 *   "version": 1,
 *   "application_id": "1234560123453231555",
 *   "type": 1,
 *   "event": {
 *     "type": "APPLICATION_AUTHORIZED",
 *     "timestamp": "2024-10-18T14:42:53.064834",
 *     "data": {
 *       "integration_type": 1,
 *       "scopes": [
 *         "applications.commands"
 *       ],
 *       "user": {
 *         // user data
 *       }
 *     }
 *   }
 * }
 *
 * @interface
 */
export interface ApplicationAuthorized {
	/**
	 * {@link IntegrationType Installation context} for the authorization.
	 */
	integration_type?: IntegrationType;

	/**
	 * User who authorized the app
	 */
	user: User;

	/**
	 * List of {@link Scope scopes} the user authorized
	 */
	scopes: Scopes[];

	/**
	 * Server which app was authorized for (when integration type is 0)
	 */
	guild?: Guild;
}