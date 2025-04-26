import {Snowflake} from "../general";

/**
 * See [permissions](https://discord.com/developers/docs/topics/permissions#permissions) for more information about the
 * {@link allow} and {@link deny} fields.
 *
 * @see [Overwrite Structure](https://discord.com/developers/docs/resources/channel#overwrite-object-overwrite-structure)
 *
 * @interface
 */
export interface Overwrite {
	/**
	 * role or user id
	 */
	id: Snowflake;

	/**
	 * either 0 (role) or 1 (member)
	 */
	type: 0 | 1;

	/**
	 * permission bit set
	 */
	allow: string;

	/**
	 * permission bit set
	 */
	deny: string;
}