import {TriggerType} from "./triggerType";
import {ActionType} from "./actionType";

type AnyActionTypeExceptTimeout = Exclude<ActionType, ActionType.Timeout>;

export interface TriggerTypeActionType {
	[TriggerType.Keyword]: ActionType;

	[TriggerType.KeywordPreset]: AnyActionTypeExceptTimeout;

	[TriggerType.MemberProfile]: AnyActionTypeExceptTimeout;

	[TriggerType.MentionSpam]: ActionType;

	[TriggerType.Spam]: AnyActionTypeExceptTimeout;
}
