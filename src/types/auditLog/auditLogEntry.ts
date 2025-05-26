import {Change} from "./change";
import {Event} from "./event";
import {Snowflake} from "../general";
import {EventOptionalEntryInformationMap} from "./eventOptionalEntryInformationMap";

/**
 * Each audit log entry represents a single administrative action (or {@link Events event}), indicated by `action_type`.
 * Most entries contain one to many changes in the `changes` array that affected an entity in Discord—whether that's a
 * user, channel, guild, emoji, or something else.
 *
 * The information (and structure) of an entry's changes will be different depending on its type. For example, in
 * `MEMBER_ROLE_UPDATE` events there is only one change: a member is either added or removed from a specific role.
 * However, in `CHANNEL_CREATE` events there are many changes, including (but not limited to) the channel's name, type,
 * and permission overwrites added. More details are in the {@link Change} documentation.
 *
 * Apps can specify why an administrative action is being taken by passing an `X-Audit-Log-Reason` request header, which
 * will be stored as the audit log entry's reason field. The `X-Audit-Log-Reason header` supports 1-512 URL-encoded
 * UTF-8 characters. Reasons are visible to users in the client and to apps when fetching audit log entries with the
 * API.
 *
 * @remarks For `APPLICATION_COMMAND_PERMISSION_UPDATE` events, the `target_id` is the command ID or the app ID since
 * the `changes` array represents the entire `permissions` property on the {@link GuildPermissions} object.
 *
 * @see [Audit Log Entry Object](https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-audit-log-entry-structure)
 *
 */
export interface AuditLogEntry<T extends Event> {
	/**
	 * ID of the affected entity (webhook, user, role, etc.)
	 */
	target_id: string | null;

	/**
	 * Changes made to the target_id
	 */
	changes?: Change<any>[];

	/**
	 * User or app that made the changes
	 */
	user_id: Snowflake | null;

	/**
	 * ID of the entry
	 */
	id: Snowflake;

	/**
	 * Type of action that occurred
	 */
	action_type: T;

	/**
	 * Additional info for certain event types
	 */
	options?: EventOptionalEntryInformationMap<Event>;

	/**
	 * Reason for the change (1-512 characters)
	 */
	reason?: string;
}