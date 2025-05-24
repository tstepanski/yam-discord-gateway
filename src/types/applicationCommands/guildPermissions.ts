import {Snowflake} from "../general";
import {Permission} from "./permission";

/**
 * Returned when fetching the permissions for an app's command(s) in a guild.
 *
 * @see [Guild Application Command Permissions Structure](https://discord.com/developers/docs/interactions/application-commands#application-command-permissions-object-guild-application-command-permissions-structure)
 */
export interface GuildPermissions {
	/**
	 * ID of the command or the application ID
	 */
	id: Snowflake;

	/**
	 * ID of the application the command belongs to
	 */
	application_id: Snowflake;

	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;

	/**
	 * Permissions for the command in the guild, max of 100
	 */
	permissions:  Permission[];
}
