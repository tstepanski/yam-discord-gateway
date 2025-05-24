import {ApplicationAuthorized} from "./applicationAuthorized";
import {IntegrationType} from "../application";

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
 *       "integration_type": 0,
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
export interface UserApplicationAuthorized extends ApplicationAuthorized {
	/**
	 * {@link IntegrationType Installation context} for the authorization.
	 */
	integration_type?: IntegrationType.USER_INSTALL;

	/**
	 * Not provided for `USER_INSTALL`
	 *
	 * @deprecated
	 */
	guild?: undefined;

}