import {ActionType} from "./actionType";
import {ActionMetadata} from "./actionMetadata";

export interface ActionTypeMetadata {
	[ActionType.BlockMessage]: Pick<ActionMetadata, "custom_message">;

	[ActionType.BlockMemberInteration]: undefined;

	[ActionType.SendAlertMessage]: Pick<ActionMetadata, "channel_id">;

	[ActionType.Timeout]: Pick<ActionMetadata, "duration_seconds">;
}