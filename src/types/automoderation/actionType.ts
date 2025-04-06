/**
 * Action Types
 *
 * @see [Action Types](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-types)
 */
export enum ActionType {
	/**
	 * blocks a member's message and prevents it from being posted. A custom explanation can be specified and shown to
	 * members whenever their message is blocked.
	 */
	BlockMessage = 1,

	/**
	 * logs user content to a specified channel
	 */
	SendAlertMessage = 2,

	/**
	 * timeout user for a specified duration
	 *
	 * A timeout action can only be set up for {@link TriggerType.Keyword} and {@link TriggerType.MentionSpam} rules.
	 * The `MODERATE_MEMBERS` permission is required to use the timeout action type.
	 */
	Timeout = 3,

	/**
	 * prevents a member from using text, voice, or other interactions
	 */
	BlockMemberInteration = 4
}