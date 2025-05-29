import {SoundboardSound} from "./soundboardSound";
import {Snowflake} from "../general";

/**
 * Includes a guild's list of soundboard sounds. Sent in response to {@link RequestSoundboardSounds}.
 *
 * @see [Soundboard Sounds](https://discord.com/developers/docs/events/gateway-events#soundboard-sounds)
 *
 * @interface
 */
export interface SoundboardSounds {
    /**
     * The guild's soundboard sounds
     */
    soundboard_sounds: SoundboardSound[];

    /**
     * ID of the guild
     */
    guild_id: Snowflake;
}