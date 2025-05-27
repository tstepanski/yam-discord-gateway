import {User} from "../users";
import {Snowflake} from "../general";

/**
 * Users can play soundboard sounds in voice channels, triggering a {@link VoiceChannelSoundEffectSend} Gateway event
 * for users connected to the voice channel.
 *
 * There is a set of
 * [default sounds](https://discord.com/developers/docs/resources/soundboard#list-default-soundboard-sounds) available
 * to all users. Soundboard sounds can also be
 * [created in a guild](https://discord.com/developers/docs/resources/soundboard#create-guild-soundboard-sound); users
 * will be able to use the sounds in the guild, and Nitro subscribers can use them in all guilds.
 *
 * Soundboard sounds in a set of guilds can be retrieved over the Gateway using {@link RequestSoundboardSounds}.
 *
 * @remarks A soundboard sound can be retrieved in MP3 or Ogg format at the URL:
 * `https://cdn.discordapp.com/soundboard-sounds/{sound_id}`
 *
 * @see [Soundboard Sound Object](https://discord.com/developers/docs/resources/soundboard#soundboard-sound-object)
 *
 * @example
 * // Example Default Soundboard Sound
 * {
 *   "name": "quack",
 *   "sound_id": "1",
 *   "volume": 1.0,
 *   "emoji_id": null,
 *   "emoji_name": "🦆",
 *   "available": true
 * }
 *
 * // Example Guild Soundboard Sound
 * {
 *   "name": "Yay",
 *   "sound_id": "1106714396018884649",
 *   "volume": 1,
 *   "emoji_id": "989193655938064464",
 *   "emoji_name": null,
 *   "guild_id": "613425648685547541",
 *   "available": true
 * }
 *
 * @interface
 */
export interface SoundboardSound {
	/**
	 * the name of this sound
	 */
	name: string;

	/**
	 * the id of this sound
	 */
	sound_id: Snowflake;

	/**
	 * the volume of this sound, from 0 to 1
	 */
	volume: number;

	/**
	 * the id of this sound's custom emoji
	 */
	emoji_id: Snowflake | null;

	/**
	 * the Unicode character of this sound's standard emoji
	 */
	emoji_name: string | null;

	/**
	 * the id of the guild this sound is in
	 */
	guild_id?: Snowflake;

	/**
	 * whether this sound can be used, may be false due to loss of Server Boosts
	 */
	available: boolean;

	/**
	 * object	the user who created this sound
	 */
	user?: User;
}