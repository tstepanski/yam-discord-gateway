import {Snowflake} from "../general";
import {Action} from "./action";
import {ActionType} from "./actionType";
import {TriggerType} from "./triggerType";
import {TriggerTypeActionType} from "./triggerTypeActionType";
import {Intent} from "../payloads";

/**
 * Auto Moderation Action Execution Event
 *
 * @see [Auto Moderation Action Execution Event Fields](https://discord.com/developers/docs/events/gateway-events#auto-moderation-action-execution-auto-moderation-action-execution-event-fields)
 * @interface
 */
export interface ActionExecutionEvent<TTriggerType extends TriggerType, TActionType extends TriggerTypeActionType[TTriggerType]>  {
	/**
	 * ID of the guild in which action was executed
	 */
	guild_id: Snowflake;

	/**
	 * Action which was executed
	 */
	action: Action<TTriggerType, TActionType>;

	/**
	 * ID of the rule which action belongs to
	 */
	rule_id: Snowflake;

	/**
	 * Trigger type of rule which was triggered
	 */
	rule_trigger_type: TTriggerType;

	/**
	 * ID of the user which generated the content which triggered the rule
	 */
	user_id: Snowflake;

	/**
	 * ID of the channel in which user content was posted
	 */
	channel_id?: Snowflake;

	/**
	 * ID of any user message which content belongs to
	 *
	 * @remarks Will not exist if message was blocked by Auto Moderation or content was not part of any message
	 */
	message_id?: Snowflake;

	/**
	 * ID of any system auto moderation messages posted as a result of this action
	 *
	 * @remarks Will not exist if this event does not correspond to an action with type
	 * {@link ActionType.SendAlertMessage}
	 */
	alert_system_message_id?: Snowflake;

	/**
	 * User-generated text content
	 *
	 * @remarks {@link Intent.MESSAGE_CONTENT} (1 << 15)
	 * [gateway intent](https://discord.com/developers/docs/events/gateway#gateway-intents) is required to receive the
	 * content and matched_content fields
	 */
	content: string;

	/**
	 * Word or phrase configured in the rule that triggered the rule
	 */
	matched_keyword?: string | null;

	/**
	 * Substring in content that triggered the rule
	 *
	 * @remarks {@link Intent.MESSAGE_CONTENT} (1 << 15)
	 * [gateway intent](https://discord.com/developers/docs/events/gateway#gateway-intents) is required to receive the
	 * content and matched_content fields
	 */
	matched_content?: string | null;
}