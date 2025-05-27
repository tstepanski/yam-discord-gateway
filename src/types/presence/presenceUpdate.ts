import {User} from "../users";
import {Snowflake} from "../general";
import {Status} from "./status";
import {Activity} from "../payloads";
import {ClientStatus} from "./clientStatus";

/**
 * A user's presence is their current state on a guild. This event is sent when a user's presence or info, such as name
 * or avatar, is updated.
 *
 * @remarks
 * <ul>
 *     <li>If you are using [Gateway Intents](https://discord.com/developers/docs/events/gateway#gateway-intents), you
 * must specify the `GUILD_PRESENCES` intent in order to receive Presence Update events</li>
 *     <li>The user object within this event can be partial, the only field which must be sent is the `id` field,
 *     everything else is optional. Along with this limitation, no fields are required, and the types of the fields are
 *     not validated. Your client should expect any combination of fields and types within this event.</li>
 * </ul>
 *
 * @see [Presence Update](https://discord.com/developers/docs/events/gateway-events#presence-update)
 *
 * @interface
 */
export interface PresenceUpdate {
	/**
	 * User whose presence is being updated
	 */
	user: User;

	/**
	 * ID of the guild
	 */
	guild_id: Snowflake;

	/**
	 * Either "idle", "dnd", "online", or "offline"
	 */
	status: Status;

	/**
	 * User's current activities
	 */
	activities: Activity[];

	/**
	 * User's platform-dependent status
	 */
	client_status: ClientStatus;
}