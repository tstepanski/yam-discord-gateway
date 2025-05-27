import {Snowflake} from "../general";
import {User} from "../users";

/**
 * Sent when a user is (un)banned from a guild.
 *
 * @see [Guild Ban Add](https://discord.com/developers/docs/events/gateway-events#guild-ban-add)
 * @see [Guild Ban Delete](https://discord.com/developers/docs/events/gateway-events#guild-ban-delete)
 */
export interface GuildBan {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;

	/**
	 * User who was (un)banned
	 */
	user: User;
}