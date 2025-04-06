import {Snowflake} from "../general";

/**
 * Additional data used when an action is executed. Different fields are relevant based on the value of action type.
 *
 * @see [Action Metadata](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-action-metadata)
 * @interface
 */
export interface ActionMetadata {
	/**
	 * channel to which user content should be logged
	 *
	 * Associated Action Type: {@link ActionType.SendAlertMessage}
	 *
	 * Constraint: existing channel
	 */
	channel_id: Snowflake;

	/**
	 * timeout duration in seconds
	 *
	 * Associated Action Type: {@link ActionType.Timeout}
	 *
	 * Constraint: maximum of 2419200 seconds (4 weeks)
	 */
	duration_seconds: number;

	/**
	 * additional explanation that will be shown to members whenever their message is blocked
	 *
	 * Associated Action Type: {@link ActionType.BlockMessage}
	 *
	 * Constraint: maximum of 150 characters
	 */
	custom_message?: string;
}