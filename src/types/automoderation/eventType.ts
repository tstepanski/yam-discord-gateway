/**
 * Indicates in what event context a rule should be checked.
 *
 * @See [Auto Moderation Event Types](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-event-types)
 */
export enum EventType {
	/**
	 * when a member sends or edits a message in the guild
	 */
	MessageSend = 1,

	/**
	 * when a member edits their profile
	 */
	MemberUpdate = 2
}