import {Sticker} from "./sticker";

/**
 * The smallest amount of data required to render a sticker. A partial sticker object.
 *
 * @see [Sticker Item Object](https://discord.com/developers/docs/resources/sticker#sticker-item-object)
 *
 * @interface
 */
export type StickerItem = Pick<Sticker, "id" | "name" | "format_type">;
