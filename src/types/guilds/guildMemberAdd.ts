import {GuildMember} from "./guildMember";
import {Snowflake} from "../general";

/**
 * Sent when a new user joins a guild
 *
 * @see [Guild Member Add](https://discord.com/developers/docs/events/gateway-events#guild-member-add)
 *
 * @interface
 */
export type GuildMemberAdd = GuildMember & {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake
};