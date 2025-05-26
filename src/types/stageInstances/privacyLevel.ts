/**
 * Privacy Level
 *
 * @see [Privacy Level](https://discord.com/developers/docs/resources/stage-instance#stage-instance-object-privacy-level)
 *
 * @enum
 */
export enum PrivacyLevel {
	/**
	 * The Stage instance is visible publicly.
	 *
	 * @deprecated
	 */
	PUBLIC = 1,

	/**
	 * The Stage instance is visible to only guild members.
	 */
	GUILD_ONLY = 2
}