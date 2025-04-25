import {TriggerType} from "./triggerType";
import {TriggerTypeActionType} from "./triggerTypeActionType";
import {ActionType} from "./actionType";
import {ActionTypeMetadata} from "./actionTypeMetadata";

/**
 * Auto Moderation Action
 *
 * @see [Auto Moderation Action Structure](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-action-object-auto-moderation-action-structure)
 * @interface
 */
export interface Action<TTriggerType extends TriggerType, TActionType extends TriggerTypeActionType[TTriggerType]> {
	/**
	 * the type of action
	 */
	type: TActionType;

	/**
	 * additional metadata needed during execution for this specific action type
	 *
	 * Can be omitted if {@link Action#type type} is set to {@link ActionType.BlockMemberInteration}.
	 */
	metadata?: ActionTypeMetadata[TActionType];
}
