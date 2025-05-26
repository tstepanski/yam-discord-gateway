import {Snowflake} from "../general";
import {GuildMember} from "../guilds";

/**
 * Used to represent a user's voice connection status.
 *
 * @see [Voice State Object](https://discord.com/developers/docs/resources/voice#voice-state-object)
 *
 * @example
 * {
 *   "channel_id": "157733188964188161",
 *   "user_id": "80351110224678912",
 *   "session_id": "90326bd25d71d39b9ef95b299e3872ff",
 *   "deaf": false,
 *   "mute": false,
 *   "self_deaf": false,
 *   "self_mute": true,
 *   "suppress": false,
 *   "request_to_speak_timestamp": "2021-03-31T18:45:31.297561+00:00"
 * }
 *
 * @interface
 */
export interface VoiceState {
	/**
	 * the guild id this voice state is for
	 */
	guild_id?: Snowflake;

	/**
	 * the channel id this user is connected to
	 */
	channel_id: Snowflake | null;

	/**
	 * the user id this voice state is for
	 */
	user_id: Snowflake;

	/**
	 * the guild member this voice state is for
	 */
	member?: GuildMember;

	/**
	 * the session id for this voice state
	 */
	session_id: string;

	/**
	 * whether this user is deafened by the server
	 */
	deaf: boolean;

	/**
	 * whether this user is muted by the server
	 */
	mute: boolean;

	/**
	 * whether this user is locally deafened
	 */
	self_deaf: boolean;

	/**
	 * whether this user is locally muted
	 */
	self_mute: boolean;

	/**
	 * whether this user is streaming using "Go Live"
	 */
	self_stream?: boolean;

	/**
	 * whether this user's camera is enabled
	 */
	self_video: boolean;

	/**
	 * whether this user's permission to speak is denied
	 */
	suppress: boolean;

	/**
	 * the time at which the user requested to speak
	 */
	request_to_speak_timestamp: string | Date | null; // TODO: setup date parsing
}