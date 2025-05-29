import {GatewayPresenceStatus} from "./gatewayPresenceStatus";
import {Activity} from "./activity";

/**
 * Sent by the client to indicate a presence or status update.
 *
 * @see [Gateway Presence Update Structure](https://discord.com/developers/docs/events/gateway-events#update-presence-gateway-presence-update-structure)
 *
 * @interface
 */
export interface GatewayPresenceUpdate {
	/**
	 * Unix time (in milliseconds) of when the client went idle, or null if the client is not idle
	 */
	since: number | null;

	/**
	 * User's activities
	 */
	activities: Activity[];

	/**
	 * User's new {@link GatewayPresenceStatus status}
	 */
	status: GatewayPresenceStatus;

	/**
	 * Whether the client is afk
	 */
	afk: boolean;
}