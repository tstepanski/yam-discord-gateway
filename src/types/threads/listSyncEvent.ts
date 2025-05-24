import {Snowflake} from "../general";
import {Channel, ThreadMember} from "../channels";

/**
 * Sent when the current user gains access to a channel.
 *
 * @see [Thread List Sync](https://discord.com/developers/docs/events/gateway-events#thread-list-sync)
 *
 * @interface
 */
export interface ListSyncEvent {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;

	/**
	 * Parent channel IDs whose threads are being synced. If omitted, then threads were synced for the entire guild.
	 * This array may contain channel_ids that have no active threads as well, so you know to clear that data.
	 */
	channel_ids?: Snowflake[];

	/**
	 * All active threads in the given channels that the current user can access
	 */
	threads: Channel[];

	/**
	 * All thread member objects from the synced threads for the current user, indicating which threads the current user
	 * has been added to
	 */
	members: ThreadMember[];
}