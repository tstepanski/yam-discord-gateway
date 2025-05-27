import {Snowflake} from "../general";
import {User} from "../users";

/**
 * Sent when a user is removed from a guild
 *
 * @remarks If using {@link Intent Gateway Intents}, the `GUILD_MEMBERS` intent will be required to receive this event.
 *
 * @see [Guild Member Remove](https://discord.com/developers/docs/events/gateway-events#guild-member-remove)
 *
 * @interface
 */
export interface GuildMemberRemove {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;

	/**
	 * User who was removed
	 */
	user: User;
}