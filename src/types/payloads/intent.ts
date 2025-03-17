/**
 * All intents which may be requested sent. Any events not listed means it's not associated with an intent and will
 * always be sent to your app. All events, including those that aren't associated with an intent, are in the
 * [Gateway events](https://discord.com/developers/docs/events/gateway-events) documentation.
 */
export enum Intent {
	/**
	 * Not a real intent, but a helper for building intents. Represents the absence of an intent.
	 */
	NONE = 0,

	/**
	 * GUILDS Intent
	 *
	 * Associated events:
	 * - GUILD_CREATE
	 * - GUILD_UPDATE
	 * - GUILD_DELETE
	 * - GUILD_ROLE_CREATE
	 * - GUILD_ROLE_UPDATE
	 * - GUILD_ROLE_DELETE
	 * - CHANNEL_CREATE
	 * - CHANNEL_UPDATE
	 * - CHANNEL_DELETE
	 * - CHANNEL_PINS_UPDATE
	 * - THREAD_CREATE
	 * - THREAD_UPDATE
	 * - THREAD_DELETE
	 * - THREAD_LIST_SYNC
	 * - THREAD_MEMBER_UPDATE
	 * - THREAD_MEMBERS_UPDATE ({@link ThreadMembersUpdateEvent} contains different data depending on which intents are
	 * used)
	 * - STAGE_INSTANCE_CREATE
	 * - STAGE_INSTANCE_UPDATE
	 * - STAGE_INSTANCE_DELETE
	 */
	GUILDS = 1 << 0,

	/**
	 * GUILD_MEMBERS Intent
	 *
	 * Turned off by default on all API versions.
	 *
	 * Associated events:
	 * - GUILD_MEMBER_ADD
	 * - GUILD_MEMBER_UPDATE
	 * - GUILD_MEMBER_REMOVE
	 * - THREAD_MEMBERS_UPDATE ({@link ThreadMembersUpdateEvent} contains different data depending on which intents are
	 * used)
	 */
	GUILD_MEMBERS = 1 << 1,

	/**
	 * GUILD_MODERATION Intent
	 *
	 * Associated events:
	 * - GUILD_AUDIT_LOG_ENTRY_CREATE
	 * - GUILD_BAN_ADD
	 * - GUILD_BAN_REMOVE
	 */
	GUILD_MODERATION = 1 << 2,

	/**
	 * GUILD_EXPRESSIONS Intent
	 *
	 * Associated events:
	 * - GUILD_EMOJIS_UPDATE
	 * - GUILD_STICKERS_UPDATE
	 * - GUILD_SOUNDBOARD_SOUND_CREATE
	 * - GUILD_SOUNDBOARD_SOUND_UPDATE
	 * - GUILD_SOUNDBOARD_SOUND_DELETE
	 * - GUILD_SOUNDBOARD_SOUNDS_UPDATE
	 */
	GUILD_EXPRESSIONS = 1 << 3,

	/**
	 * GUILD_INTEGRATIONS Intent
	 *
	 * Associated events:
	 * - GUILD_INTEGRATIONS_UPDATE
	 * - INTEGRATION_CREATE
	 * - INTEGRATION_UPDATE
	 * - INTEGRATION_DELETE
	 */
	GUILD_INTEGRATIONS = 1 << 4,

	/**
	 * GUILD_WEBHOOKS Intent
	 *
	 * Associated events:
	 * - WEBHOOKS_UPDATE
	 */
	GUILD_WEBHOOKS = 1 << 5,

	/**
	 * GUILD_INVITES Intent
	 *
	 * Associated events:
	 * - INVITE_CREATE
	 * - INVITE_DELETE
	 */
	GUILD_INVITES = 1 << 6,

	/**
	 * GUILD_VOICE_STATES Intent
	 *
	 * Associated events:
	 * - VOICE_CHANNEL_EFFECT_SEND
	 * - VOICE_STATE_UPDATE
	 */
	GUILD_VOICE_STATES = 1 << 7,

	/**
	 * GUILD_PRESENCES Intent
	 *
	 * Turned off by default on all API versions.
	 *
	 * Associated events:
	 * - PRESENCE_UPDATE
	 */
	GUILD_PRESENCES = 1 << 8,

	/**
	 * GUILD_MESSAGES Intent
	 *
	 * Associated events:
	 * - MESSAGE_CREATE
	 * - MESSAGE_UPDATE
	 * - MESSAGE_DELETE
	 * - MESSAGE_DELETE_BULK
	 */
	GUILD_MESSAGES = 1 << 9,

	/**
	 * GUILD_MESSAGE_REACTIONS Intent
	 *
	 * Associated events:
	 * - MESSAGE_REACTION_ADD
	 * - MESSAGE_REACTION_REMOVE
	 * - MESSAGE_REACTION_REMOVE_ALL
	 * - MESSAGE_REACTION_REMOVE_EMOJI
	 */
	GUILD_MESSAGE_REACTIONS = 1 << 10,

	/**
	 * GUILD_MESSAGE_TYPING Intent
	 *
	 * Associated events:
	 * - TYPING_START
	 */
	GUILD_MESSAGE_TYPING = 1 << 11,

	/**
	 * DIRECT_MESSAGES Intent
	 *
	 * Associated events:
	 * - MESSAGE_CREATE
	 * - MESSAGE_UPDATE
	 * - MESSAGE_DELETE
	 * - CHANNEL_PINS_UPDATE
	 */
	DIRECT_MESSAGES = 1 << 12,

	/**
	 * DIRECT_MESSAGE_REACTIONS Intent
	 *
	 * Associated events:
	 * - MESSAGE_REACTION_ADD
	 * - MESSAGE_REACTION_REMOVE
	 * - MESSAGE_REACTION_REMOVE_ALL
	 * - MESSAGE_REACTION_REMOVE_EMOJI
	 */
	DIRECT_MESSAGE_REACTIONS = 1 << 13,

	/**
	 * DIRECT_MESSAGE_TYPING Intent
	 *
	 * Associated events:
	 * - TYPING_START
	 */
	DIRECT_MESSAGE_TYPING = 1 << 14,

	/**
	 * MESSAGE_CONTENT Intent
	 *
	 * Does not represent individual events, but rather affects what data is present for events that could contain message
	 * content fields.
	 * @see [MESSAGE_CONTENT intent](https://discord.com/developers/docs/events/gateway#message-content-intent).
	 */
	MESSAGE_CONTENT = 1 << 15,

	/**
	 * GUILD_SCHEDULED_EVENTS Intent
	 *
	 * Associated events:
	 * - GUILD_SCHEDULED_EVENT_CREATE
	 * - GUILD_SCHEDULED_EVENT_UPDATE
	 * - GUILD_SCHEDULED_EVENT_DELETE
	 * - GUILD_SCHEDULED_EVENT_USER_ADD
	 * - GUILD_SCHEDULED_EVENT_USER_REMOVE
	 */
	GUILD_SCHEDULED_EVENTS = 1 << 16,

	/**
	 * AUTO_MODERATION_CONFIGURATION Intent
	 *
	 * Associated events:
	 * - AUTO_MODERATION_RULE_CREATE
	 * - AUTO_MODERATION_RULE_UPDATE
	 * - AUTO_MODERATION_RULE_DELETE
	 */
	AUTO_MODERATION_CONFIGURATION = 1 << 20,

	/**
	 * AUTO_MODERATION_EXECUTION Intent
	 *
	 * Associated events:
	 * - AUTO_MODERATION_ACTION_EXECUTION
	 */
	AUTO_MODERATION_EXECUTION = 1 << 21,

	/**
	 * GUILD_MESSAGE_POLLS Intent
	 *
	 * Associated events:
	 * - MESSAGE_POLL_VOTE_ADD
	 * - MESSAGE_POLL_VOTE_REMOVE
	 */
	GUILD_MESSAGE_POLLS = 1 << 24,

	/**
	 * DIRECT_MESSAGE_POLLS Intent
	 *
	 * Associated events:
	 * - MESSAGE_POLL_VOTE_ADD
	 * - MESSAGE_POLL_VOTE_REMOVE
	 */
	DIRECT_MESSAGE_POLLS = 1 << 25
}