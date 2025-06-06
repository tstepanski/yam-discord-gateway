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
	MembersChunkEvent,
	UnavailableGuild,
	UserRemovedFromGuild
} from "../guilds";
import {GuildAuditLogEntry} from "../auditLog";
import {GuildStickersUpdate} from "../stickers";
import {GuildIntegrationsUpdate, IntegrationCreate, IntegrationDelete, IntegrationUpdate} from "../integrations";
import {GuildRoleCreate, GuildRoleDelete, GuildRoleUpdate} from "../permissions";
import {GuildScheduledEvent, UserAdd, UserRemove} from "../guildScheduledEvents";
import {
	GuildSoundboardSoundDelete,
	GuildSoundboardSoundsUpdate,
	SoundboardSound,
	SoundboardSounds
} from "../soundboard";
import {User} from "../users";
import {VoiceState} from "../voice";

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

	[EventName.GuildMembersChunk]: MembersChunkEvent;

	[EventName.GuildRoleCreate]: GuildRoleCreate;

	[EventName.GuildRoleUpdate]: GuildRoleUpdate;

	[EventName.GuildRoleDelete]: GuildRoleDelete;

	[EventName.GuildScheduledEventCreate]: GuildScheduledEvent;

	[EventName.GuildScheduledEventUpdate]: GuildScheduledEvent;

	[EventName.GuildScheduledEventDelete]: GuildScheduledEvent;

	[EventName.GuildScheduledEventUserAdd]: UserAdd;

	[EventName.GuildScheduledEventUserRemove]: UserRemove;

	[EventName.GuildSoundboardSoundCreate]: SoundboardSound;

	[EventName.GuildSoundboardSoundUpdate]: SoundboardSound;

	[EventName.GuildSoundboardSoundDelete]: GuildSoundboardSoundDelete;

	[EventName.GuildSoundboardSoundsUpdate]: GuildSoundboardSoundsUpdate;

	[EventName.SoundboardSounds]: SoundboardSounds;

	[EventName.IntegrationCreate]: IntegrationCreate;

	[EventName.IntegrationUpdate]: IntegrationUpdate;

	[EventName.IntegrationDelete]: IntegrationDelete;

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

	[EventName.UserUpdate]: User;

	[EventName.VoiceChannelEffectSend]: unknown; // TODO: add definition

	[EventName.VoiceStateUpdate]: VoiceState;

	[EventName.VoiceServerUpdate]: unknown; // TODO: add definition

	[EventName.WebhooksUpdate]: unknown; // TODO: add definition

	[EventName.MessagePollVoteAdd]: unknown; // TODO: add definition

	[EventName.MessagePollVoteRemove]: unknown; // TODO: add definition
}

export type TEvent = EventName & keyof EventTypeMap;