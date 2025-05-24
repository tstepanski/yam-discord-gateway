import {MembershipState} from "./membershipState";
import {Snowflake} from "../general";
import {User} from "../users";
import {Role} from "./role";

/**
 * Team Member
 *
 * @see [Team Member Object](https://discord.com/developers/docs/topics/teams#data-models-team-member-object)
 *
 * @interface
 */
export interface TeamMember {
	/**
	 * User's membership state on the team
	 */
	membership_state: MembershipState;

	/**
	 * ID of the parent team of which they are a member
	 */
	team_id: Snowflake;

	/**
	 * Avatar, discriminator, ID, and username of the user
	 */
	user: Pick<User, "avatar" | "discriminator" | "id" | "username">;

	/**
	 * Role of the team member
	 */
	role: Role;
}