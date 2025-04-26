import {Snowflake} from "../general";

/**
 * An object that specifies the emoji to use as the default way to react to a forum post.
 * Exactly one of emoji_id and emoji_name must be set.
 *
 * @see [Default Reaction Structure](https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure)
 *
 * @interface
 */
export interface BaseDefaultReaction {
}

/**
 * @inheritDoc
 */
export interface DefaultReactionByEmojiId extends BaseDefaultReaction {
	/**
	 * the id of a guild's custom emoji
	 */
	emoji_id: Snowflake;
}

/**
 * @inheritDoc
 */
export interface DefaultReactionByEmojiName extends BaseDefaultReaction {
	/**
	 * the Unicode character of the emoji
	 */
	emoji_name: string;
}


/**
 * An object that specifies the emoji to use as the default way to react to a forum post.
 * Exactly one of emoji_id and emoji_name must be set.
 *
 * @see [Default Reaction Structure](https://discord.com/developers/docs/resources/channel#default-reaction-object-default-reaction-structure)
 *
 * @type
 */
export type DefaultReaction = DefaultReactionByEmojiId | DefaultReactionByEmojiName;
