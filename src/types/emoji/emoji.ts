import {Snowflake} from "../general";
import {User} from "../users";

/**
 * Emoji Object
 *
 * @see [Emoji Object](https://discord.com/developers/docs/resources/emoji#emoji-object)
 *
 * @interface
 */
export interface Emoji {
	/**
	 * [emoji id](https://discord.com/developers/docs/reference#image-formatting)
	 */
	id: Snowflake | null;

	/**
	 * emoji name
	 *
	 * @remarks can be null only in reaction emoji object
	 */
	name: string | null;

	/**
	 * roles allowed to use this emoji
	 */
	roles?: Snowflake[];

	/**
	 * user that created this emoji
	 */
	user?: User;

	/**
	 * whether this emoji must be wrapped in colons
	 */
	require_colons?: boolean;

	/**
	 * whether this emoji is managed
	 */
	managed?: boolean;

	/**
	 * whether this emoji is animated
	 */
	animated?: boolean;

	/**
	 * whether this emoji is animated
	 */
	available?: boolean;
}