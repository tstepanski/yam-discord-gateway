import {Snowflake} from "../general";

/**
 * Sent when the {@link ThreadMember thread member} object for the current user is updated. The inner payload is a
 * {@link ThreadMember thread member} object with an extra guild_id field. This event is documented for completeness,
 * but unlikely to be used by most bots. For bots, this event largely is just a signal that you are a member of the
 * thread. See the [threads docs](https://discord.com/developers/docs/topics/threads) for more details.
 *
 * @see [Thread Member Update](https://discord.com/developers/docs/events/gateway-events#thread-member-update)
 *
 * @interface
 */
export interface MemberUpdate {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
}