import {Snowflake} from "../general";
import {Permission} from "../permissions";
import {OverwriteType} from "./overwriteType";

/**
 * See [permissions](https://discord.com/developers/docs/topics/permissions#permissions) for more information about the
 * `allow` and `deny` fields.
 *
 * @see [Channel Overwrite Object](https://discord.com/developers/docs/resources/channel#overwrite-object)
 *
 * @interface
 */
export interface Overwrite {
	/**
	 * role or user id
	 */
	id: Snowflake;

	/**
	 * to what this overwrite pertains
	 */
	type: OverwriteType;

	/**
	 * permission bit set
	 */
	allow: string | Permission; // TODO: setup parsing

	/**
	 * permission bit set
	 */
	deny: string | Permission; // TODO: setup parsing
}