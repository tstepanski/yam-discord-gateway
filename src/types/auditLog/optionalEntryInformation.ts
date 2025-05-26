import {Snowflake} from "../general";
import {StringifiedOverwriteType} from "./stringifiedOverwriteType";

/**
 * Optional Audit Entry Info
 *
 * @see [Optional Audit Entry Info](https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info)
 *
 * @interface
 */
export interface OptionalEntryInformation {
	/**
	 * ID of the app whose permissions were targeted
	 */
	application_id: Snowflake;

	/**
	 * Name of the Auto Moderation rule that was triggered
	 */
	auto_moderation_rule_name: string;

	/**
	 * Trigger type of the Auto Moderation rule that was triggered
	 */
	auto_moderation_rule_trigger_type: string;

	/**
	 * Channel in which the entities were targeted
	 */
	channel_id: Snowflake;

	/**
	 * Number of entities that were targeted
	 */
	count: string;

	/**
	 * Number of days after which inactive members were kicked
	 */
	delete_member_days: string;

	/**
	 * ID of the overwritten entity
	 */
	id: Snowflake;

	/**
	 * Number of members removed by the prune
	 */
	members_removed: string;

	/**
	 * ID of the message that was targeted
	 */
	message_id: Snowflake;

	/**
	 * Name of the role if type is `StringifiedOverwriteType.Role` (`"0"`) (not present if type is
	 * `StringifiedOverwriteType.Member` (`"1"`))
	 */
	role_name?: string;

	/**
	 * Type of overwritten entity
	 */
	type: StringifiedOverwriteType;

	/**
	 * The type of integration which performed the action
	 */
	integration_type: string;
}