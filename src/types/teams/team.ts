import {Snowflake} from "../general";
import {TeamMember} from "./teamMember";

/**
 * Teams are groups of developers (or other Discord users) who want to collaborate and share access to an app's
 * configuration, management, and payout settings. Go team(s)!
 *
 * @see [Team Data Models](https://discord.com/developers/docs/topics/teams#data-models)
 *
 * @interface
 */
export interface Team {
	/**
	 * Hash of the image of the team's icon
	 */
	icon: string | null

	/**
	 * Unique ID of the team
	 */
	id: Snowflake;

	/**
	 * Members of the team
	 */
	members: TeamMember[];

	/**
	 * Name of the team
	 */
	name: string;

	/**
	 * User ID of the current team owner
	 */
	owner_user_id: Snowflake;
}