import {Snowflake} from "../general";

/**
 * Sent when a client wants to join, move, or disconnect from a voice channel.
 *
 * @example
 * {
 *   "op": 4,
 *   "d": {
 *     "guild_id": "41771983423143937",
 *     "channel_id": "127121515262115840",
 *     "self_mute": false,
 *     "self_deaf": false
 *   }
 * }
 *
 * @see [Gateway Voice State Update Structure](https://discord.com/developers/docs/events/gateway-events#update-voice-state-gateway-voice-state-update-structure)
 *
 * @interface
 */
export interface UpdateVoiceState {
	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;

	/**
	 * ID of the voice channel client wants to join (null if disconnecting)
	 */
	channel_id: Snowflake | null;

	/**
	 * Whether the client is muted
	 */
	self_mute: boolean;

	/**
	 * Whether the client deafened
	 */
	self_deaf: boolean;
}