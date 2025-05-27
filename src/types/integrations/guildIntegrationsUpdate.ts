import {Snowflake} from "../general";

/**
 * Sent when a guild integration is updated.
 *
 * @see [Guild Integrations Update](https://discord.com/developers/docs/events/gateway-events#guild-integrations-update)
 *
 * @interface
 */
export interface GuildIntegrationsUpdate {
	/**
	 * ID of the guild whose integrations were updated
	 */
	guild_id: Snowflake;
}