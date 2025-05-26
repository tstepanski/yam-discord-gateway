import {EventName} from "./eventName";
import {Hello} from "./hello";
import {ReadyEvent} from "./readyEvent";
import {ActionExecutionEvent, Rule} from "../automoderation";
import {GuildPermissions} from "../applicationCommands";
import {Channel} from "../channels";
import {ListSyncEvent, MembersUpdate, MemberUpdate} from "../threads";
import {Entitlement} from "../entitlements";
import {Guild, GuildCreate} from "../guilds";

/**
 * Map of {@link EventName} to expected response payload type
 *
 * @see [Receive Events](https://discord.com/developers/docs/events/gateway-events#receive-events)
 *
 * @interface
 */
export interface EventTypeMap {
	[EventName.Hello]: Hello;

	[EventName.Ready]: ReadyEvent;

	[EventName.Resumed]: undefined;

	[EventName.Reconnect]: undefined;

	[EventName.InvalidSession]: boolean;

	[EventName.ApplicationCommandPermissionsUpdate]: GuildPermissions;

	[EventName.AutoModerationRuleCreate]: Rule<any>;

	[EventName.AutoModerationRuleUpdate]: Rule<any>;

	[EventName.AutoModerationRuleDelete]: Rule<any>;

	[EventName.AutoModerationActionExecution]: ActionExecutionEvent<any, any>;

	[EventName.ChannelCreate]: Channel;

	[EventName.ChannelUpdate]: Channel;

	[EventName.ChannelDelete]: Channel;

	[EventName.ThreadCreate]: Channel;

	[EventName.ThreadUpdate]: Channel;

	[EventName.ThreadDelete]: Pick<Channel, "id" | "guild_id" | "parent_id" | "type">;

	[EventName.ThreadListSync]: ListSyncEvent;

	[EventName.ThreadMemberUpdate]: MemberUpdate;

	[EventName.ThreadMembersUpdate]: MembersUpdate;

	[EventName.EntitlementCreate]: Entitlement;

	[EventName.EntitlementUpdate]: Entitlement;

	[EventName.EntitlementDelete]: Entitlement;

	[EventName.GuildCreate]: GuildCreate;

	[EventName.GuildUpdate]: Guild;
}

export type TEvent = EventName & keyof EventTypeMap;