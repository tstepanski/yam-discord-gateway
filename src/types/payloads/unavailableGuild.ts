import {Snowflake} from "../general";

/**
 * A partial guild object. Represents an Offline Guild, or a Guild whose information has not been provided through Guild
 * [Create events](https://discord.com/developers/docs/events/gateway-events#guild-create) during the Gateway connect.
 *
 * @example
 * {
 *   "id": "41771983423143937",
 *   "unavailable": true
 * }
 *
 * @see [Unavailable Guild Object](https://discord.com/developers/docs/resources/guild#unavailable-guild-object)
 * @interface
 */
export interface UnavailableGuild {
	id: Snowflake;

	unavailable: true;
}