import {Snowflake} from "../general";

/**
 * The data for the user's
 * [avatar decoration](https://support.discord.com/hc/en-us/articles/13410113109911-Avatar-Decorations).
 *
 * @see [Avatar Decoration Data Structure](https://discord.com/developers/docs/resources/user#avatar-decoration-data-object-avatar-decoration-data-structure)
 *
 * @interface
 */
export interface AvatarDecorationData {
	/**
	 * the [avatar decoration hash](https://discord.com/developers/docs/reference#image-formatting)
	 */
	asset: string;

	/**
	 * id of the avatar decoration's SKU
	 */
	sku_id: Snowflake;
}