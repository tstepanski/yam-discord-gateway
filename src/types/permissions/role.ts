import {Snowflake} from "../general";
import {RoleTags} from "./roleTags";
import {RoleFlag} from "./roleFlag";

/**
 * Roles represent a set of permissions attached to a group of users. Roles have names, colors, and can be "pinned" to
 * the sidebar, causing their members to be listed separately. Roles can have separate permission profiles for the
 * global context (guild) and channel context. The @everyone role has the same ID as the guild it belongs to.
 *
 * @see [Role Object](https://discord.com/developers/docs/topics/permissions#role-object)
 *
 * @interface
 */
export interface Role {
	/**
	 * role id
	 */
	id: Snowflake;

	/**
	 * role name
	 */
	name: string;

	/**
	 * integer representation of hexadecimal color code
	 */
	color: number;

	/**
	 * if this role is pinned in the user listing
	 */
	hoist: boolean;

	/**
	 * role [icon hash](https://discord.com/developers/docs/reference#image-formatting)
	 */
	icon?: string | null;

	/**
	 * role unicode emoji
	 */
	unicode_emoji: string | null;

	/**
	 * position of this role (roles with the same position are sorted by id)
	 */
	position: number;

	/**
	 * permission bit set
	 */
	permission: string; // TODO setup deserialization

	/**
	 * whether this role is managed by an integration
	 */
	managed: boolean;

	/**
	 * whether this role is mentionable
	 */
	mentionable: boolean;

	/**
	 * the tags this role has
	 */
	tags?: RoleTags | null;

	/**
	 * {@link RoleFlag role flags} combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field)
	 */
	flags: RoleFlag;
}