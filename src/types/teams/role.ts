/**
 * Team Member Role Types
 *
 * @see [Team Member Role Types](https://discord.com/developers/docs/topics/teams#team-member-roles-team-member-role-types)
 *
 * @remarks The owner role is not represented in the role field on the {@link TeamMember team member object}. Instead,
 * the `owner_user_id` field on the {@link team} object should be used to identify which user has the owner role for the
 * team.
 *
 * @enum
 */
export enum Role {
	/**
	 * Admins have similar access as owners, except they cannot take destructive actions on the team or team-owned apps.
	 */
	Admin = "admin",

	/**
	 * Developers can access information about team-owned apps, like the client secret or public key. They can also take
	 * limited actions on team-owned apps, like configuring interaction endpoints or resetting the bot token. Members
	 * with the Developer role cannot manage the team or its members, or take destructive actions on team-owned apps.
	 */
	Developer = "developer",

	/**
	 * Read-only members can access information about a team and any team-owned apps. Some examples include getting the
	 * IDs of applications and exporting payout records. Members can also invite bots associated with team-owned apps
	 * that are marked private.
	 */
	ReadOnly = "read_only"
}