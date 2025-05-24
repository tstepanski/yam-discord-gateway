import {ApplicationAuthorized} from "./applicationAuthorized";
import {IntegrationType} from "../application";
import {Guild} from "../guilds";

/**
 * @inheritDoc
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
export interface GuildApplicationAuthorized extends ApplicationAuthorized {
	/**
	 * {@link IntegrationType Installation context} for the authorization.
	 */
	integration_type?: IntegrationType.GUILD_INSTALL;

	/**
	 * Server which app was authorized for
	 */
	guild?: Guild;

}