/**
 * Keyword Preset Types
 *
 * @see [Auto Moderation Keyword Preset Types](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-preset-types)
 */
export enum KeywordPresetType {
	/**
	 * words that may be considered forms of swearing or cursing
	 */
	Profanity = 1,

	/**
	 * words that refer to sexually explicit behavior or activity
	 */
	SexualContent = 2,

	/**
	 * personal insults or words that may be considered hate speech
	 */
	Slurs = 3
}