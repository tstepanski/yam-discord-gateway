/**
 * Channel Flags
 *
 * @see [Channel Flags](https://discord.com/developers/docs/resources/channel#channel-object-channel-flags)
 *
 * @enum
 */
export enum Flag {
	/**
	 * This thread is pinned to the top of its parent {@link ChannelType.GUILD_FORUM GUILD_FORUM} or
	 * {@link ChannelType.GUILD_MEDIA GUILD_MEDIA} channel
	 */
	PINNED = 1 << 1,

	/**
	 * Whether a tag is required to be specified when creating a thread in a {@link ChannelType.GUILD_FORUM GUILD_FORUM}
	 * or a {@link ChannelType.GUILD_MEDIA GUILD_MEDIA} channel. Tags are specified in the
	 * {@link Channel.applied_tags applied_tags} field.
	 */
	REQUIRE_TAG = 1 << 4,

	/**
	 * When set hides the embedded media download options. Available only for media channels
	 */
	HIDE_MEDIA_DOWNLOAD_OPTIONS = 1 << 15
}