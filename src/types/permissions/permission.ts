/**
 * Permissions are a way to limit and grant certain abilities to users in Discord. A set of base permissions can be
 * configured at the guild level for different roles. When these roles are attached to users, they grant or revoke
 * specific privileges within the guild. Along with the guild-level permissions, Discord also supports permission
 * overwrites that can be assigned to individual roles or members on a per-channel basis.
 *
 * Permissions are stored in a variable-length integer serialized into a string, and are calculated using bitwise
 * operations. For example, the permission value 123 will be serialized as "123". The total permissions integer can be
 * determined by OR-ing (|) together each individual value, and flags can be checked using AND (&) operations.
 *
 * Additional logic is required when permission overwrites are involved; this is further explained below. For
 * more information about bitwise operations and flags, see [this page](https://en.wikipedia.org/wiki/Bit_field).
 *
 * @remarks In API v8 and above, all permissions are serialized as strings, including the allow and deny fields in
 * overwrites. Any new permissions are rolled back into the base field.
 *
 * @see [Permissions](https://discord.com/developers/docs/topics/permissions)
 *
 * @example
 * // Permissions value that can Send Messages (0x800) and Add Reactions (0x40):
 * permissions = 0x40 | 0x800; // 2112
 *
 * // Checking for flags that are set:
 * (permissions & 0x40) == 0x40;   // True
 * (permissions & 0x800) == 0x800; // True
 *
 * // Kick Members (0x2) was not set:
 * (permissions & 0x2) == 0x2; // False
 *
 * @example
 * // Permissions value that can Send Messages (0x800) and Add Reactions (0x40):
 * permissions = 0x40 | 0x800; // 2112
 *
 * // Checking for flags that are set:
 * (permissions & 0x40) == 0x40;   // True
 * (permissions & 0x800) == 0x800; // True
 *
 * // Kick Members (0x2) was not set:
 * (permissions & 0x2) == 0x2; // False
 *
 * @enum
 */
export class Permission {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
	}

	/**
	 * Allows creation of instant invites
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 0n)
	 */
	public static readonly CREATE_INSTANT_INVITE: bigint = (1n << 0n);

	/**
	 * Allows kicking members
	 *
	 * @returns {bigint} (1n << 1n)
	 */
	public static readonly KICK_MEMBERS: bigint = (1n << 1n);

	/**
	 * Allows banning members
	 *
	 * @returns {bigint} (1n << 2n)
	 */
	public static readonly BAN_MEMBERS: bigint = (1n << 2n);

	/**
	 * Allows all permissions and bypasses channel permission overwrites
	 *
	 * @returns {bigint} (1n << 3n)
	 */
	public static readonly ADMINISTRATOR: bigint = (1n << 3n);

	/**
	 * Allows management and editing of channels
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 4n)
	 */
	public static readonly MANAGE_CHANNELS: bigint = (1n << 4n);

	/**
	 * Allows management and editing of the guild
	 *
	 * @returns {bigint} (1n << 5n)
	 */
	public static readonly MANAGE_GUILD: bigint = (1n << 5n);

	/**
	 * Allows for adding new reactions to messages. This permission does not apply to reacting with an existing reaction
	 * on a message.
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 6n)
	 */
	public static readonly ADD_REACTIONS: bigint = (1n << 6n);

	/**
	 * Allows for viewing of audit logs
	 *
	 * @returns {bigint} (1n << 7n)
	 */
	public static readonly VIEW_AUDIT_LOG: bigint = (1n << 7n);

	/**
	 * Allows for using priority speaker in a voice channel
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *
	 * @returns {bigint} (1n << 8n)
	 */
	public static readonly PRIORITY_SPEAKER: bigint = (1n << 8n);

	/**
	 * Allows the user to go live
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 9n)
	 */
	public static readonly STREAM: bigint = (1n << 9n);

	/**
	 * Allows guild members to view a channel, which includes reading messages in text channels and joining voice
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 10n)
	 */
	public static readonly VIEW_CHANNEL: bigint = (1n << 10n);

	/**
	 * Allows for sending messages in a channel and creating threads in a forum (does not allow sending messages in
	 * threads)
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 11n)
	 */
	public static readonly SEND_MESSAGES: bigint = (1n << 11n);

	/**
	 * Allows for sending of /tts messages
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 12n)
	 */
	public static readonly SEND_TTS_MESSAGES: bigint = (1n << 12n);

	/**
	 * Allows for deletion of other users messages
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 13n)
	 */
	public static readonly MANAGE_MESSAGES: bigint = (1n << 13n);

	/**
	 * Links sent by users with this permission will be auto-embedded
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 14n)
	 */
	public static readonly EMBED_LINKS: bigint = (1n << 14n);

	/**
	 * Allows for uploading images and files
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 15n)
	 */
	public static readonly ATTACH_FILES: bigint = (1n << 15n);

	/**
	 * Allows for reading of message history
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 16n)
	 */
	public static readonly READ_MESSAGE_HISTORY: bigint = (1n << 16n);

	/**
	 * Allows for using the @everyone tag to notify all users in a channel, and the @here tag to notify all online users
	 * in a channel
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 17n)
	 */
	public static readonly MENTION_EVERYONE: bigint = (1n << 17n);

	/**
	 * Allows the usage of custom emojis from other servers
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 18n)
	 */
	public static readonly USE_EXTERNAL_EMOJIS: bigint = (1n << 18n);

	/**
	 * Allows for viewing guild insights
	 *
	 * @returns {bigint} (1n << 19n)
	 */
	public static readonly VIEW_GUILD_INSIGHTS: bigint = (1n << 19n);

	/**
	 * Allows for joining of a voice channel
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 20n)
	 */
	public static readonly CONNECT: bigint = (1n << 20n);

	/**
	 * Allows for speaking in a voice channel
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *
	 * @returns {bigint} (1n << 21n)
	 */
	public static readonly SPEAK: bigint = (1n << 21n);

	/**
	 * Allows for muting members in a voice channel
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 22n)
	 */
	public static readonly MUTE_MEMBERS: bigint = (1n << 22n);

	/**
	 * Allows for deafening of members in a voice channel
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *
	 * @returns {bigint} (1n << 23n)
	 */
	public static readonly DEAFEN_MEMBERS: bigint = (1n << 23n);

	/**
	 * Allows for moving of members between voice
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 24n)
	 */
	public static readonly MOVE_MEMBERS: bigint = (1n << 24n);

	/**
	 * Allows for using voice-activity-detection in a voice channel
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *
	 * @returns {bigint} (1n << 25n)
	 */
	public static readonly USE_VAD: bigint = (1n << 25n);

	/**
	 * Allows for modification of own nickname
	 *
	 * @returns {bigint} (1n << 26n)
	 */
	public static readonly CHANGE_NICKNAME: bigint = (1n << 26n);

	/**
	 * Allows for modification of other users nicknames
	 *
	 * @returns {bigint} (1n << 27n)
	 */
	public static readonly MANAGE_NICKNAMES: bigint = (1n << 27n);

	/**
	 * Allows management and editing of roles
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 28n)
	 */
	public static readonly MANAGE_ROLES: bigint = (1n << 28n);

	/**
	 * Allows management and editing of webhooks
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 29n)
	 */
	public static readonly MANAGE_WEBHOOKS: bigint = (1n << 29n);

	/**
	 * Allows for editing and deleting emojis, stickers, and soundboard sounds created by all users
	 *
	 * @returns {bigint} (1n << 30n)
	 */
	public static readonly MANAGE_GUILD_EXPRESSIONS: bigint = (1n << 30n);

	/**
	 * Allows members to use application commands, including slash commands and context menu commands.
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 31n)
	 */
	public static readonly USE_APPLICATION_COMMANDS: bigint = (1n << 31n);

	/**
	 * Allows for requesting to speak in stage channels. (This permission is under active development and may be changed
	 * or removed.)
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 32n)
	 */
	public static readonly REQUEST_TO_SPEAK: bigint = (1n << 32n);

	/**
	 * Allows for editing and deleting scheduled events created by all users
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 33n)
	 */
	public static readonly MANAGE_EVENTS: bigint = (1n << 33n);

	/**
	 * Allows for deleting and archiving threads, and viewing all private threads
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *
	 * @returns {bigint} (1n << 34n)
	 */
	public static readonly MANAGE_THREADS: bigint = (1n << 34n);

	/**
	 * Allows for creating public and announcement threads
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *
	 * @returns {bigint} (1n << 35n)
	 */
	public static readonly CREATE_PUBLIC_THREADS: bigint = (1n << 35n);

	/**
	 * Allows for creating private threads
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *
	 * @returns {bigint} (1n << 36n)
	 */
	public static readonly CREATE_PRIVATE_THREADS: bigint = (1n << 36n);

	/**
	 * Allows the usage of custom stickers from other servers
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 37n)
	 */
	public static readonly USE_EXTERNAL_STICKERS: bigint = (1n << 37n);

	/**
	 * Allows for sending messages in threads
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *
	 * @returns {bigint} (1n << 38n)
	 */
	public static readonly SEND_MESSAGES_IN_THREADS: bigint = (1n << 38n);

	/**
	 * Allows for using Activities (applications with the EMBEDDED flag)
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *
	 * @returns {bigint} (1n << 39n)
	 */
	public static readonly USE_EMBEDDED_ACTIVITIES: bigint = (1n << 39n);

	/**
	 * Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from
	 * speaking in voice and stage
	 *
	 * @returns {bigint} (1n << 40n)
	 */
	public static readonly MODERATE_MEMBERS: bigint = (1n << 40n);

	/**
	 * Allows for viewing role subscription insights
	 *
	 * @returns {bigint} (1n << 41n)
	 */
	public static readonly VIEW_CREATOR_MONETIZATION_ANALYTICS: bigint = (1n << 41n);

	/**
	 * Allows for using soundboard in a voice channel
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *
	 * @returns {bigint} (1n << 42n)
	 */
	public static readonly USE_SOUNDBOARD: bigint = (1n << 42n);

	/**
	 * Allows for creating emojis, stickers, and soundboard sounds, and editing and deleting those created by the
	 * current user.
	 *
	 * @remarks Not yet available to developers,
	 * [see changelog](https://discord.com/developers/docs/change-log#clarification-on-permission-splits-for-expressions-and-events).
	 *
	 * @returns {bigint} (1n << 43n)
	 */
	public static readonly CREATE_GUILD_EXPRESSIONS: bigint = (1n << 43n);

	/**
	 * Allows for creating scheduled events, and editing and deleting those created by the current user.
	 *
	 * @remarks Applies to the following channel types (Not yet available to developers,
	 * [see changelog](https://discord.com/developers/docs/change-log#clarification-on-permission-splits-for-expressions-and-events)):
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 *
	 * @returns {bigint} (1n << 44n)
	 */
	public static readonly CREATE_EVENTS: bigint = (1n << 44n);

	/**
	 * Allows the usage of custom soundboard sounds from other servers
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_VOICE
	 *
	 * @returns {bigint} (1n << 45n)
	 */
	public static readonly USE_EXTERNAL_SOUNDS: bigint = (1n << 45n);

	/**
	 * Allows sending voice messages
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 46n)
	 */
	public static readonly SEND_VOICE_MESSAGES: bigint = (1n << 46n);

	/**
	 * Allows sending polls
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 49n)
	 */
	public static readonly SEND_POLLS: bigint = (1n << 49n);

	/**
	 * Allows user-installed apps to send public responses. When disabled, users will still be allowed to use their apps
	 * but the responses will be ephemeral. This only Applies to
	 * apps not also installed to the server.
	 *
	 * @remarks Applies to the following channel types:
	 *  * GUILD_TEXT
	 *  * GUILD_ANNOUNCEMENT
	 *  * GUILD_FORUM
	 *  * GUILD_MEDIA
	 *  * GUILD_VOICE
	 *  * GUILD_STAGE_VOICE
	 *
	 * @returns {bigint} (1n << 50n)
	 */
	public static readonly USE_EXTERNAL_APPS: bigint = (1n << 50n);
}