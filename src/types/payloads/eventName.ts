import {Entitlement} from "../entitlements";

/**
 * Receive events are Gateway events encapsulated in an {@link GatewayEventPayload event payload}, and are sent by
 * Discord to an app through a Gateway connection. Receive events correspond to events that happen in a Discord server
 * where the app is installed.
 *
 * @see [Receive Events](https://discord.com/developers/docs/events/gateway-events#receive-events)
 */
export enum EventName {
  /**
   * Defines the heartbeat interval
   */
  Hello = "HELLO",

  /**
   * Contains the initial state information
   */
  Ready = "READY",

  /**
   * Response to Resume
   */
  Resumed = "RESUMED",

  /**
   * Server is going away, client should reconnect to gateway and resume
   */
  Reconnect = "RECONNECT",

  /**
   * Failure response to Identify or Resume or invalid active session
   */
  InvalidSession = "INVALID_SESSION",

  /**
   * Application command permission was updated
   */
  ApplicationCommandPermissionsUpdate = "APPLICATION_COMMAND_PERMISSIONS_UPDATE",

  /**
   * Auto Moderation rule was created
   */
  AutoModerationRuleCreate = "AUTO_MODERATION_RULE_CREATE",

  /**
   * Auto Moderation rule was updated
   */
  AutoModerationRuleUpdate = "AUTO_MODERATION_RULE_UPDATE",

  /**
   * Auto Moderation rule was deleted
   */
  AutoModerationRuleDelete = "AUTO_MODERATION_RULE_DELETE",

  /**
   * Auto Moderation rule was triggered and an action was executed (e.g. a message was blocked)
   */
  AutoModerationActionExecution = "AUTO_MODERATION_ACTION_EXECUTION",

  /**
   * New guild channel created
   */
  ChannelCreate = "CHANNEL_CREATE",

  /**
   * Channel was updated
   */
  ChannelUpdate = "CHANNEL_UPDATE",

  /**
   * Channel was deleted
   */
  ChannelDelete = "CHANNEL_DELETE",

  /**
   * Message was pinned or unpinned
   */
  ChannelPinsUpdate = "CHANNEL_PINS_UPDATE",

  /**
   * Thread created, also sent when being added to a private thread
   */
  ThreadCreate = "THREAD_CREATE",

  /**
   * Thread was updated
   */
  ThreadUpdate = "THREAD_UPDATE",

  /**
   * Thread was deleted
   */
  ThreadDelete = "THREAD_DELETE",

  /**
   * Sent when gaining access to a channel, contains all active threads in that channel
   */
  ThreadListSync = "THREAD_LIST_SYNC",

  /**
   * Thread member for the current user was updated
   */
  ThreadMemberUpdate = "THREAD_MEMBER_UPDATE",

  /**
   * Some user(s) were added to or removed from a thread
   */
  ThreadMembersUpdate = "THREAD_MEMBERS_UPDATE",

  /**
   * Entitlement was created
   */
  EntitlementCreate = "ENTITLEMENT_CREATE",

  /**
   * Entitlement was updated or renewed
   *
   * For subscription entitlements, this event is triggered only when a user's subscription ends, providing an
   * {@link Entitlement.ends_at} timestamp that indicates the end of the entitlement.
   */
  EntitlementUpdate = "ENTITLEMENT_UPDATE",

  /**
   * Entitlement was deleted
   *
   * @remarks Entitlement deletions are infrequent, and occur when:
   *  * Discord issues a refund for a subscription
   *  * Discord removes an entitlement from a user via internal tooling
   *  * Discord deletes an app-managed entitlement they created via the API
   *  Entitlements are not deleted when they expire.
   */
  EntitlementDelete = "ENTITLEMENT_DELETE",

  /**
   * Lazy-load for unavailable guild, guild became available, or user joined a new guild
   */
  GuildCreate = "GUILD_CREATE",

  /**
   * Guild was updated
   */
  GuildUpdate = "GUILD_UPDATE",

  /**
   * Guild became unavailable, or user left/was removed from a guild
   */
  GuildDelete = "GUILD_DELETE",

  /**
   * A guild audit log entry was created
   */
  GuildAuditLogEntryCreate = "GUILD_AUDIT_LOG_ENTRY_CREATE",

  /**
   * User was banned from a guild
   */
  GuildBanAdd = "GUILD_BAN_ADD",

  /**
   * User was unbanned from a guild
   */
  GuildBanRemove = "GUILD_BAN_REMOVE",

  /**
   * Guild emojis were updated
   */
  GuildEmojisUpdate = "GUILD_EMOJIS_UPDATE",

  /**
   * Guild stickers were updated
   */
  GuildStickersUpdate = "GUILD_STICKERS_UPDATE",

  /**
   * Guild integration was updated
   */
  GuildIntegrationsUpdate = "GUILD_INTEGRATIONS_UPDATE",

  /**
   * New user joined a guild
   */
  GuildMemberAdd = "GUILD_MEMBER_ADD",

  /**
   * User was removed from a guild
   */
  GuildMemberRemove = "GUILD_MEMBER_REMOVE",

  /**
   * Guild member was updated
   */
  GuildMemberUpdate = "GUILD_MEMBER_UPDATE",

  /**
   * Response to Request Guild Members
   */
  GuildMembersChunk = "GUILD_MEMBERS_CHUNK",

  /**
   * Guild role was created
   */
  GuildRoleCreate = "GUILD_ROLE_CREATE",

  /**
   * Guild role was updated
   */
  GuildRoleUpdate = "GUILD_ROLE_UPDATE",

  /**
   * Guild role was deleted
   */
  GuildRoleDelete = "GUILD_ROLE_DELETE",

  /**
   * Guild scheduled event was created
   */
  GuildScheduledEventCreate = "GUILD_SCHEDULED_EVENT_CREATE",

  /**
   * Guild scheduled event was updated
   */
  GuildScheduledEventUpdate = "GUILD_SCHEDULED_EVENT_UPDATE",

  /**
   * Guild scheduled event was deleted
   */
  GuildScheduledEventDelete = "GUILD_SCHEDULED_EVENT_DELETE",

  /**
   * User subscribed to a guild scheduled event
   */
  GuildScheduledEventUserAdd = "GUILD_SCHEDULED_EVENT_USER_ADD",

  /**
   * User unsubscribed from a guild scheduled event
   */
  GuildScheduledEventUserRemove = "GUILD_SCHEDULED_EVENT_USER_REMOVE",

  /**
   * Guild soundboard sound was created
   */
  GuildSoundboardSoundCreate = "GUILD_SOUNDBOARD_SOUND_CREATE",

  /**
   * Guild soundboard sound was updated
   */
  GuildSoundboardSoundUpdate = "GUILD_SOUNDBOARD_SOUND_UPDATE",

  /**
   * Guild soundboard sound was deleted
   */
  GuildSoundboardSoundDelete = "GUILD_SOUNDBOARD_SOUND_DELETE",

  /**
   * Guild soundboard sounds were updated
   */
  GuildSoundboardSoundsUpdate = "GUILD_SOUNDBOARD_SOUNDS_UPDATE",

  /**
   * Response to Request Soundboard Sounds
   */
  SoundboardSounds = "SOUNDBOARD_SOUNDS",

  /**
   * Guild integration was created
   */
  IntegrationCreate = "INTEGRATION_CREATE",

  /**
   * Guild integration was updated
   */
  IntegrationUpdate = "INTEGRATION_UPDATE",

  /**
   * Guild integration was deleted
   */
  IntegrationDelete = "INTEGRATION_DELETE",

  /**
   * User used an interaction, such as an Application Command
   */
  InteractionCreate = "INTERACTION_CREATE",

  /**
   * Invite to a channel was created
   */
  InviteCreate = "INVITE_CREATE",

  /**
   * Invite to a channel was deleted
   */
  InviteDelete = "INVITE_DELETE",

  /**
   * Message was created
   */
  MessageCreate = "MESSAGE_CREATE",

  /**
   * Message was edited
   */
  MessageUpdate = "MESSAGE_UPDATE",

  /**
   * Message was deleted
   */
  MessageDelete = "MESSAGE_DELETE",

  /**
   * Multiple messages were deleted at once
   */
  MessageDeleteBulk = "MESSAGE_DELETE_BULK",

  /**
   * User reacted to a message
   */
  MessageReactionAdd = "MESSAGE_REACTION_ADD",

  /**
   * User removed a reaction from a message
   */
  MessageReactionRemove = "MESSAGE_REACTION_REMOVE",

  /**
   * All reactions were explicitly removed from a message
   */
  MessageReactionRemoveAll = "MESSAGE_REACTION_REMOVE_ALL",

  /**
   * All reactions for a given emoji were explicitly removed from a message
   */
  MessageReactionRemoveEmoji = "MESSAGE_REACTION_REMOVE_EMOJI",

  /**
   * User was updated
   */
  PresenceUpdate = "PRESENCE_UPDATE",

  /**
   * Stage instance was created
   */
  StageInstanceCreate = "STAGE_INSTANCE_CREATE",

  /**
   * Stage instance was updated
   */
  StageInstanceUpdate = "STAGE_INSTANCE_UPDATE",

  /**
   * Stage instance was deleted or closed
   */
  StageInstanceDelete = "STAGE_INSTANCE_DELETE",

  /**
   * Premium App Subscription was created
   */
  SubscriptionCreate = "SUBSCRIPTION_CREATE",

  /**
   * Premium App Subscription was updated
   */
  SubscriptionUpdate = "SUBSCRIPTION_UPDATE",

  /**
   * Premium App Subscription was deleted
   */
  SubscriptionDelete = "SUBSCRIPTION_DELETE",

  /**
   * User started typing in a channel
   */
  TypingStart = "TYPING_START",

  /**
   * Properties about the user changed
   */
  UserUpdate = "USER_UPDATE",

  /**
   * Someone sent an effect in a voice channel the current user is connected to
   */
  VoiceChannelEffectSend = "VOICE_CHANNEL_EFFECT_SEND",

  /**
   * Someone joined, left, or moved a voice channel
   */
  VoiceStateUpdate = "VOICE_STATE_UPDATE",

  /**
   * Guild's voice server was updated
   */
  VoiceServerUpdate = "VOICE_SERVER_UPDATE",

  /**
   * Guild channel webhook was created, update, or deleted
   */
  WebhooksUpdate = "WEBHOOKS_UPDATE",

  /**
   * User voted on a poll
   */
  MessagePollVoteAdd = "MESSAGE_POLL_VOTE_ADD",

  /**
   * User removed a vote on a poll
   */
  MessagePollVoteRemove = "MESSAGE_POLL_VOTE_REMOVE",
}