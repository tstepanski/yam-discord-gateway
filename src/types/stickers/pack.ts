import {Snowflake} from "../general";
import {Sticker} from "./sticker";

/**
 * Represents a pack of standard stickers.
 *
 * @see [Sticker Pack Object](https://discord.com/developers/docs/resources/sticker#sticker-pack-object)
 *
 * @example
 * {
 *   "id": "847199849233514549",
 *   "stickers": [],
 *   "name": "Wumpus Beyond",
 *   "sku_id": "847199849233514547",
 *   "cover_sticker_id": "749053689419006003",
 *   "description": "Say hello to Wumpus!",
 *   "banner_asset_id": "761773777976819732"
 * }
 *
 * @interface
 */
export interface Pack {
	/**
	 * id of the sticker pack
	 */
	id: Snowflake;

	/**
	 * the stickers in the pack
	 */
	stickers: Sticker[];

	/**
	 * name of the sticker pack
	 */
	name: string;

	/**
	 * id of the pack's SKU
	 */
	sku_id: Snowflake;

	/**
	 * id of a sticker in the pack which is shown as the pack's icon
	 */
	cover_sticker_id?: Snowflake;

	/**
	 * description of the sticker pack
	 */
	description: string;

	/**
	 * id of the sticker pack's [banner image](https://discord.com/developers/docs/reference#image-formatting)
	 */
	banner_asset_id?: Snowflake;
}
