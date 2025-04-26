import {ApiVersion} from "../general";

/**
 * Channel Types
 *
 * @remarks Type {@link ANNOUNCEMENT_THREAD}, {@link PUBLIC_THREAD}, and {@link PRIVATE_THREAD}, are only available in
 * {@link ApiVersion.v9 API v9} and above.
 *
 * @see [Channel Types](https://discord.com/developers/docs/resources/channel#channel-object-channel-types)
 *
 * @enum
 */
export enum ChannelType {
	/**
	 * a text channel within a server
	 */
	GUILD_TEXT = 0,

	/**
	 * a direct message between users
	 */
	GM = 1,

	/**
	 * a voice channel within a server
	 */
	GUILD_VOICE = 2,

	/**
	 * a direct message between multiple users
	 */
	GROUP_DM = 3,

	/**
	 * an [organizational category](https://support.discord.com/hc/en-us/articles/115001580171-Channel-Categories-101)
	 * that contains up to 50 channels
	 */
	GUILD_CATEGORY = 4,

	/**
	 * a channel that
	 * [users can follow and crosspost into their own server](https://support.discord.com/hc/en-us/articles/360032008192)
	 * (formerly news channels)
	 */
	GUILD_ANNOUNCEMENT = 5,

	/**
	 * a temporary sub-channel within a {@link GUILD_ANNOUNCEMENT} channel
	 */
	ANNOUNCEMENT_THREAD = 10,

	/**
	 * a temporary sub-channel within a {@link GUILD_TEXT} or {@link GUILD_FORUM} channel
	 */
	PUBLIC_THREAD = 11,

	/**
	 * a temporary sub-channel within a {@link GUILD_TEXT} channel that is only viewable by those invited and those with
	 * the MANAGE_THREADS permission
	 */
	PRIVATE_THREAD = 12,

	/**
	 * a voice channel for
	 * [hosting events with an audience](https://support.discord.com/hc/en-us/articles/1500005513722)
	 */
	GUILD_STAGE_VOICE = 13,

	/**
	 * the channel in a [hub](https://support.discord.com/hc/en-us/articles/1500005513722) containing the listed servers
	 */
	GUILD_DIRECTORY = 14,

	/**
	 * Channel that can only contain threads
	 */
	GUILD_FORUM = 15,

	/**
	 * Channel that can only contain threads, similar to {@link GUILD_FORUM} channels
	 */
	GUILD_MEDIA = 16
}