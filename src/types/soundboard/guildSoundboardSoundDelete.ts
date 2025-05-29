import {Snowflake} from "../general";

/**
 * Sent when a guild soundboard sound is deleted.
 *
 * @see [Guild Soundboard Sound Delete](https://discord.com/developers/docs/events/gateway-events#guild-soundboard-sound-delete)
 *
 * @interface
 */
export interface GuildSoundboardSoundDelete {
    /**
     * ID of the sound that was deleted
     */
    sound_id: Snowflake;

    /**
     * ID of the guild the sound was in
     */
    guild_id: Snowflake;
}