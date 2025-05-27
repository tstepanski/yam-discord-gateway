import {Event} from "./event";
import {OptionalEntryInformation} from "./optionalEntryInformation";

/**
 * Event Optional Entry Information Map
 *
 * @see [Optional Audit Entry Info](https://discord.com/developers/docs/resources/audit-log#audit-log-entry-object-optional-audit-entry-info)
 *
 * @interface
 */
export interface EventOptionalEntryInformationMap {
    [Event.APPLICATION_COMMAND_PERMISSION_UPDATE]: Pick<OptionalEntryInformation, "application_id">;

    [Event.AUTO_MODERATION_BLOCK_MESSAGE]: Pick<OptionalEntryInformation, "auto_moderation_rule_name" | "auto_moderation_rule_trigger_type" | "channel_id">;

    [Event.AUTO_MODERATION_FLAG_TO_CHANNEL]: Pick<OptionalEntryInformation, "auto_moderation_rule_name" | "auto_moderation_rule_trigger_type" | "channel_id">;

    [Event.AUTO_MODERATION_USER_COMMUNICATION_DISABLED]: Pick<OptionalEntryInformation, "auto_moderation_rule_name" | "auto_moderation_rule_trigger_type" | "channel_id">;

    [Event.CHANNEL_OVERWRITE_CREATE]: Pick<OptionalEntryInformation, "id" | "role_name" | "type">;

    [Event.CHANNEL_OVERWRITE_DELETE]: Pick<OptionalEntryInformation, "id" | "role_name" | "type">;

    [Event.CHANNEL_OVERWRITE_UPDATE]: Pick<OptionalEntryInformation, "id" | "role_name" | "type">;

    [Event.MEMBER_DISCONNECT]: Pick<OptionalEntryInformation, "count">;

    [Event.MEMBER_KICK]: Pick<OptionalEntryInformation, "integration_type">;

    [Event.MEMBER_MOVE]: Pick<OptionalEntryInformation, "channel_id" | "count">;

    [Event.MEMBER_PRUNE]: Pick<OptionalEntryInformation, "delete_member_days" | "members_removed">;

    [Event.MEMBER_ROLE_UPDATE]: Pick<OptionalEntryInformation, "integration_type">;

    [Event.MESSAGE_BULK_DELETE]: Pick<OptionalEntryInformation, "count">;

    [Event.MESSAGE_DELETE]: Pick<OptionalEntryInformation, "channel_id" | "count">;

    [Event.MESSAGE_PIN]: Pick<OptionalEntryInformation, "channel_id" | "message_id">;

    [Event.MESSAGE_UNPIN]: Pick<OptionalEntryInformation, "channel_id" | "message_id">;

    [Event.STAGE_INSTANCE_CREATE]: Pick<OptionalEntryInformation, "channel_id">;

    [Event.STAGE_INSTANCE_DELETE]: Pick<OptionalEntryInformation, "channel_id">;

    [Event.STAGE_INSTANCE_UPDATE]: Pick<OptionalEntryInformation, "channel_id">;
}

export type TEvent = Event & keyof EventOptionalEntryInformationMap;

export type EventOptionalEntryInformationOrUndefined<T extends Event> =
    T extends keyof EventOptionalEntryInformationMap ? EventOptionalEntryInformationMap[T] : undefined;
