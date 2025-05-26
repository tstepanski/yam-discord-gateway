import {Snowflake} from "../general";
import {Sticker} from "./sticker";

/**
 * Guild Stickers Update
 *
 * @see [Guild Stickers Update Event Fields](https://discord.com/developers/docs/events/gateway-events#guild-stickers-update)
 *
 * @interface
 */
export interface GuildStickersUpdate {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;

	/**
	 * Array of {@link Sticker stickers}
	 */
	stickers: Sticker[];
}