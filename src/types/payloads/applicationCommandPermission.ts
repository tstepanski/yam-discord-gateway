import {Snowflake} from "../general";
import {ApplicationCommandPermissionType} from "./applicationCommandPermissionType";

/**
 * Application command permissions allow you to enable or disable commands for specific users, roles, or channels within
 * a guild.
 *
 * @see [Application Command Permissions Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-application-command-permissions-structure)
 */
export interface ApplicationCommandPermission {
	/**
	 * ID of the role, user, or channel. It can also be a permission constant
	 */
	id: Snowflake;

	/**
	 * role (1), user (2), or channel (3)
	 */
	type: ApplicationCommandPermissionType;

	/**
	 * true to allow, false, to disallow
	 */
	permission: boolean;
}

