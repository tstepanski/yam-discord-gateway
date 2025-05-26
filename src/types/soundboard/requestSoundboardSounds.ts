import {Snowflake} from "../general";

/**
 * Used to request soundboard sounds for a list of guilds. The server will send
 * {@link SoundboardSoundsEvent Soundboard Sounds} events for each guild in response.
 *
 * @example
 * {
 *   "op": 31,
 *   "d": {
 *     "guild_ids": ["613425648685547541", "81384788765712384"]
 *   }
 * }
 *
 * @see [Request Soundboard Sounds Structure](https://discord.com/developers/docs/events/gateway-events#request-soundboard-sounds-request-soundboard-sounds-structure)
 *
 * @interface
 */
export interface RequestSoundboardSounds {
	/**
	 * IDs of the guilds to get soundboard sounds for
	 */
	guild_ids: Snowflake[];
}

