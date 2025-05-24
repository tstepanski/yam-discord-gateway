import {Snowflake} from "../general";

/**
 * An object that represents a tag that may be applied to a thread in a {@link ChannelType.GUILD_FORUM GUILD_FORUM} or
 * {@link ChannelType.GUILD_MEDIA GUILD_MEDIA} channel.
 *
 * @see [Forum Tag Structure](https://discord.com/developers/docs/resources/channel#forum-tag-object-forum-tag-structure)
 *
 * @interface
 */
export interface ForumTag {
	/**
	 * the id of the tag
	 */
	id: Snowflake;

	/**
	 * the name of the tag (0-20 characters)
	 */
	name: string;

	/**
	 * whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission
	 */
	moderated: boolean;

	/**
	 * the id of a guild's custom emoji
	 *
	 * @remarks At most one of {@link emoji_id} and {@link emoji_name} may be set to a non-null value.
	 */
	emoji_id: Snowflake | null;

	/**
	 * the Unicode character of the emoji
	 *
	 * @remarks At most one of {@link emoji_id} and {@link emoji_name} may be set to a non-null value.
	 */
	emoji_name: string | null;
}

/**
 * Specify a {@link ForumTag} by {@link ForumTag.emoji_id emoji_id}
 */
export type ForumTagByEmojiId = Omit<ForumTag, "emoji_name">;

/**
 * Specify a {@link ForumTag} by {@link ForumTag.emoji_name emoji_name}
 */
export type ForumTagByEmojiName = Omit<ForumTag, "emoji_id">;
