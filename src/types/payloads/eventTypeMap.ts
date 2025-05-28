import {EventName} from "./eventName";
import {Hello} from "./hello";
import {ReadyEvent} from "./readyEvent";
import {ActionExecutionEvent, Rule} from "../automoderation";
import {GuildPermissions} from "../applicationCommands";
import {Channel} from "../channels";
import {ListSyncEvent, MembersUpdate, MemberUpdate} from "../threads";
import {Entitlement} from "../entitlements";
import {
	Guild,
	GuildBan,
	GuildCreate,
	GuildMemberAdd,
	GuildMemberRemove,
	GuildMemberUpdate,
	UnavailableGuild,
	UserRemovedFromGuild
} from "../guilds";
import {GuildAuditLogEntry} from "../auditLog";
import {GuildStickersUpdate} from "../stickers";
import {GuildIntegrationsUpdate} from "../integrations";

/**
 * Map of {@link EventName} to expected response payload type
 *
 * @see [Receive Events](https://discord.com/developers/docs/events/gateway-events#receive-events)
 *
 * @interface
 */
export interface EventTypeMap {
	[EventName.Hello]: Hello;

	[EventName.Ready]: ReadyEvent;

	[EventName.Resumed]: undefined;

	[EventName.Reconnect]: undefined;

	[EventName.InvalidSession]: boolean;

	[EventName.ApplicationCommandPermissionsUpdate]: GuildPermissions;

	[EventName.AutoModerationRuleCreate]: Rule<any>;

	[EventName.AutoModerationRuleUpdate]: Rule<any>;

	[EventName.AutoModerationRuleDelete]: Rule<any>;

	[EventName.AutoModerationActionExecution]: ActionExecutionEvent<any, any>;

	[EventName.ChannelCreate]: Channel;

	[EventName.ChannelUpdate]: Channel;

	[EventName.ChannelDelete]: Channel;

	[EventName.ThreadCreate]: Channel;

	[EventName.ThreadUpdate]: Channel;

	[EventName.ThreadDelete]: Pick<Channel, "id" | "guild_id" | "parent_id" | "type">;

	[EventName.ThreadListSync]: ListSyncEvent;

	[EventName.ThreadMemberUpdate]: MemberUpdate;

	[EventName.ThreadMembersUpdate]: MembersUpdate;

	[EventName.EntitlementCreate]: Entitlement;

	[EventName.EntitlementUpdate]: Entitlement;

	[EventName.EntitlementDelete]: Entitlement;

	[EventName.GuildCreate]: GuildCreate;

	[EventName.GuildUpdate]: Guild;

	[EventName.GuildDelete]: UnavailableGuild | UserRemovedFromGuild;

	[EventName.GuildAuditLogEntryCreate]: GuildAuditLogEntry<any>;

	[EventName.GuildBanAdd]: GuildBan;

	[EventName.GuildBanRemove]: GuildBan;

	[EventName.GuildStickersUpdate]: GuildStickersUpdate;

	[EventName.GuildIntegrationsUpdate]: GuildIntegrationsUpdate;

	[EventName.GuildMemberAdd]: GuildMemberAdd;

	[EventName.GuildMemberRemove]: GuildMemberRemove;

	[EventName.GuildMemberUpdate]: GuildMemberUpdate;

	[EventName.GuildMembersChunk]: unknown; // TODO: add definition

	[EventName.GuildRoleCreate]: unknown; // TODO: add definition

	[EventName.GuildRoleUpdate]: unknown; // TODO: add definition

	[EventName.GuildRoleDelete]: unknown; // TODO: add definition

	[EventName.GuildScheduledEventCreate]: unknown; // TODO: add definition

	[EventName.GuildScheduledEventUpdate]: unknown; // TODO: add definition

	[EventName.GuildScheduledEventDelete]: unknown; // TODO: add definition

	[EventName.GuildScheduledEventUserAdd]: unknown; // TODO: add definition

	[EventName.GuildScheduledEventUserRemove]: unknown; // TODO: add definition

	[EventName.GuildSoundboardSoundCreate]: unknown; // TODO: add definition

	[EventName.GuildSoundboardSoundUpdate]: unknown; // TODO: add definition

	[EventName.GuildSoundboardSoundDelete]: unknown; // TODO: add definition

	[EventName.GuildSoundboardSoundsUpdate]: unknown; // TODO: add definition

	[EventName.SoundboardSounds]: unknown; // TODO: add definition

	[EventName.IntegrationCreate]: unknown; // TODO: add definition

	[EventName.IntegrationUpdate]: unknown; // TODO: add definition

	[EventName.IntegrationDelete]: unknown; // TODO: add definition

	[EventName.InteractionCreate]: unknown; // TODO: add definition

	[EventName.InviteCreate]: unknown; // TODO: add definition

	[EventName.InviteDelete]: unknown; // TODO: add definition

	[EventName.MessageCreate]: unknown; // TODO: add definition

	[EventName.MessageUpdate]: unknown; // TODO: add definition

	[EventName.MessageDelete]: unknown; // TODO: add definition

	[EventName.MessageDeleteBulk]: unknown; // TODO: add definition

	[EventName.MessageReactionAdd]: unknown; // TODO: add definition

	[EventName.MessageReactionRemove]: unknown; // TODO: add definition

	[EventName.MessageReactionRemoveAll]: unknown; // TODO: add definition

	[EventName.MessageReactionRemoveEmoji]: unknown; // TODO: add definition

	[EventName.PresenceUpdate]: unknown; // TODO: add definition

	[EventName.StageInstanceCreate]: unknown; // TODO: add definition

	[EventName.StageInstanceUpdate]: unknown; // TODO: add definition

	[EventName.StageInstanceDelete]: unknown; // TODO: add definition

	[EventName.SubscriptionCreate]: unknown; // TODO: add definition

	[EventName.SubscriptionUpdate]: unknown; // TODO: add definition

	[EventName.SubscriptionDelete]: unknown; // TODO: add definition

	[EventName.TypingStart]: unknown; // TODO: add definition

	[EventName.UserUpdate]: unknown; // TODO: add definition

	[EventName.VoiceChannelEffectSend]: unknown; // TODO: add definition

	[EventName.VoiceStateUpdate]: unknown; // TODO: add definition

	[EventName.VoiceServerUpdate]: unknown; // TODO: add definition

	[EventName.WebhooksUpdate]: unknown; // TODO: add definition

	[EventName.MessagePollVoteAdd]: unknown; // TODO: add definition

	[EventName.MessagePollVoteRemove]: unknown; // TODO: add definition
}

export type TEvent = EventName & keyof EventTypeMap;