import {Snowflake} from "../general";
import {SoundboardSound} from "./soundboardSound";

/**
 * Includes a guild's list of soundboard sounds. Sent in response to {@link RequestSoundboardSounds}.
 *
 * @see [Soundboard Sounds Event Fields](https://discord.com/developers/docs/events/gateway-events#soundboard-sounds)
 *
 * @interface
 */
export interface SoundboardSoundsEvent {
	/**
	 * The guild's soundboard sounds
	 */
	soundboard_sounds: SoundboardSound[];

	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;
}