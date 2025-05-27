import {Snowflake} from "../general";
import {Type} from "./type";
import {FormatType} from "./formatType";
import {User} from "../users";

/**
 * Represents a sticker that can be sent in messages.
 *
 * @see [Sticker Object](https://discord.com/developers/docs/resources/sticker#sticker-object)
 *
 * @example
 * {
 *   "id": "749054660769218631",
 *   "name": "Wave",
 *   "tags": "wumpus, hello, sup, hi, oi, heyo, heya, yo, greetings, greet, welcome, wave, :wave, :hello, :hi, :hey, hey, \ud83d\udc4b, \ud83d\udc4b\ud83c\udffb, \ud83d\udc4b\ud83c\udffc, \ud83d\udc4b\ud83c\udffd, \ud83d\udc4b\ud83c\udffe, \ud83d\udc4b\ud83c\udfff, goodbye, bye, see ya, later, laterz, cya",
 *   "type": 1,
 *   "format_type": 3,
 *   "description": "Wumpus waves hello",
 *   "pack_id": "847199849233514549",
 *   "sort_value": 12
 * }
 *
 * @interface
 */
export interface Sticker {
	/**
	 * [id of the sticker](https://discord.com/developers/docs/reference#image-formatting)
	 */
	id: Snowflake;

	/**
	 * for standard stickers, id of the pack the sticker is from
	 */
	pack_id?: Snowflake;

	/**
	 * name of the sticker
	 */
	name: string;

	/**
	 * description of the sticker
	 */
	description: string | null;

	/**
	 * autocomplete/suggestion tags for the sticker (max 200 characters)
	 *
	 * @remarks A comma separated list of keywords is the format used in this field by standard stickers, but this is
	 * just a convention. Incidentally the client will always use a name generated from an emoji as the value of this
	 * field when creating or modifying a guild sticker.
	 */
	tags: string;

	/**
	 * {@link Type type of sticker}
	 */
	type: Type;

	/**
	 * {@link FormatType type of sticker format}
	 */
	format_type: FormatType;

	/**
	 * whether this guild sticker can be used, may be false due to loss of Server Boosts
	 */
	available?: boolean;

	/**
	 * id of the guild that owns this sticker
	 */
	guild_id?: Snowflake;

	/**
	 * the user that uploaded the guild sticker
	 */
	user?: User;

	/**
	 * the standard sticker's sort order within its pack
	 */
	sort_value?: number;
}