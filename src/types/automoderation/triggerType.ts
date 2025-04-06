/**
 * Characterizes the type of content which can trigger the rule.
 *
 * @see [Auto Moderation Trigger Types](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-types)
 */
export enum TriggerType {
	/**
	 * check if content contains words from a user defined list of keywords (Maximum: 6 per guild)
	 */
	Keyword = 1,

	/**
	 * check if content represents generic spam (Maximum: 1 per guild)
	 */
	Spam = 3,

	/**
	 * check if content contains words from internal pre-defined wordsets (Maximum: 1 per guild)
	 */
	KeywordPreset = 4,

	/**
	 * check if content contains more unique mentions than allowed (Maximum: 1 per guild)
	 */
	MentionSpam = 5,

	/**
	 * check if member profile contains words from a user defined list of keywords (Maximum: 1 per guild)
	 */
	MemberProfile = 6
}