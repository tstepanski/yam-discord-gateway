import {EventName} from "./eventName";
import {Hello} from "./hello";
import {ReadyEvent} from "./readyEvent";
import {ActionExecutionEvent, Rule} from "../automoderation";
import {GuildApplicationCommandPermissions} from "./guildApplicationCommandPermissions";

/**
 * Map of {@link EventName} to expected response payload type
 *
 * @see [Receive Events](https://discord.com/developers/docs/events/gateway-events#receive-events)
 */
export interface EventTypeMap {
	[EventName.Hello]: Hello;

	[EventName.Ready]: ReadyEvent;

	[EventName.Resumed]: undefined;

	[EventName.Reconnect]: undefined;

	[EventName.InvalidSession]: boolean;

	[EventName.ApplicationCommandPermissionsUpdate]: GuildApplicationCommandPermissions;

	[EventName.AutoModerationRuleCreate]: Rule<any>;

	[EventName.AutoModerationRuleUpdate]: Rule<any>;

	[EventName.AutoModerationRuleDelete]: Rule<any>;

	[EventName.AutoModerationActionExecution]: ActionExecutionEvent<any, any>;
}

export type TEvent = EventName & keyof EventTypeMap;