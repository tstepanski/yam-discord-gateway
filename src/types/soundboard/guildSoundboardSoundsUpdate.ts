import {SoundboardSound} from "./soundboardSound";
import {Snowflake} from "../general";

/**
 * Sent when multiple guild soundboard sounds are updated.
 *
 * @see [Guild Soundboard Sounds Update](https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sounds-update)
 *
 * @interface
 */
export interface GuildSoundboardSoundsUpdate {
    /**
     * The guild's soundboard sounds
     */
    soundboard_sounds: SoundboardSound[];

    /**
     * ID of the guild
     */
    guild_id: Snowflake;
}