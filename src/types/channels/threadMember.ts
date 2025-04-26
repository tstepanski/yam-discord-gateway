import {Snowflake} from "../general";
import {GuildMember} from "../guilds";
import {EventName} from "../payloads";

/**
 * A thread member object contains information about a user that has joined a thread.
 *
 * @see [Thread Member Structure](https://discord.com/developers/docs/resources/channel#thread-member-object-thread-member-structure)
 *
 * @interface
 */
export interface ThreadMember {
	/**
	 * ID of the thread
	 *
	 * @remarks omitted on the member sent within each thread in the {@link EventName.GuildCreate GUILD_CREATE} event.
	 */
	id?: Snowflake;

	/**
	 * ID of the user
	 *
	 * @remarks omitted on the member sent within each thread in the {@link EventName.GuildCreate GUILD_CREATE} event.
	 */
	user_id?: Snowflake;

	/**
	 * Time the user last joined the thread
	 */
	join_timestamp?: string; // TODO: setup datetime parsing

	/**
	 * Any user-thread settings, currently only used for notifications
	 */
	flags: number;

	/**
	 * Additional information about the user
	 *
	 * @remarks omitted on the member sent within each thread in the {@link EventName.GuildCreate GUILD_CREATE} event.
	 *
	 * @remarks only present when with_member is set to true when calling List Thread Members or Get Thread Member.
	 */
	member?: GuildMember;
}
