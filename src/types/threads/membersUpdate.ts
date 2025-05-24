import {Snowflake} from "../general";
import {ThreadMember} from "../channels";

/**
 * Sent when anyone is added to or removed from a thread. If the current user does not have the
 * {@link Intent.GUILD_MEMBERS GUILD_MEMBERS} (1 << 15)
 * [Gateway Intent](https://discord.com/developers/docs/events/gateway#gateway-intents), then this event will only be
 * sent if the current user was added to or removed from the thread.
 *
 * @see [Thread Members Update](https://discord.com/developers/docs/events/gateway-events#thread-members-update)
 *
 * @interface
 */
export interface MembersUpdate {
	/**
	 * ID of the thread
	 */
	id: Snowflake;

	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;

	/**
	 * Approximate number of members in the thread
	 *
	 * @remarks Capped at 50
	 */
	member_count: number;

	/**
	 * Users who were added to the thread
	 */
	added_members?: ThreadMember[];

	/**
	 * Users who were added to the thread
	 */
	removed_member_ids: Snowflake[];
}