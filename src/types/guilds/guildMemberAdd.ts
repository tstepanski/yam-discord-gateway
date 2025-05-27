import {GuildMember} from "./guildMember";
import {Snowflake} from "../general";

/**
 * Sent when a new user joins a guild
 *
 * @remarks If using {@link Intent Gateway Intents}, the `GUILD_MEMBERS` intent will be required to receive this event.
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