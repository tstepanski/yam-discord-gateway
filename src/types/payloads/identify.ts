import {GatewayPresenceUpdate} from "./gatewayPresenceUpdate";
import {IdentifyConnectionProperties} from "./identifyConnectionProperties";
import {Intent} from "./intent";

/**
 * Used to trigger the initial handshake with the gateway.
 * Details about identifying is in the
 * [Gateway documentation](https://discord.com/developers/docs/events/gateway#identifying).
 * @see [Identify Structure](https://discord.com/developers/docs/events/gateway-events#identify-identify-structure)
 * @example
 * {
 *   "op": 2,
 *   "d": {
 *     "token": "my_token",
 *     "properties": {
 *       "os": "linux",
 *       "browser": "disco",
 *       "device": "disco"
 *     },
 *     "compress": true,
 *     "large_threshold": 250,
 *     "shard": [0, 1],
 *     "presence": {
 *       "activities": [{
 *         "name": "Cards Against Humanity",
 *         "type": 0
 *       }],
 *       "status": "dnd",
 *       "since": 91879201,
 *       "afk": false
 *     },
 *     // This intent represents 1 << 0 for GUILDS, 1 << 1 for GUILD_MEMBERS, and 1 << 2 for GUILD_BANS
 *     // This connection will only receive the events defined in those three intents
 *     "intents": 7
 *   }
 * }
 * @interface
 */
export interface Identify {
	/**
	 * Authentication token
	 */
	token: string;

	/**
	 * {@link IdentifyConnectionProperties Connection properties}
	 */
	properties: IdentifyConnectionProperties;

	/**
	 * Whether this connection supports compression of packets
	 * @defaultValue false
	 */
	compress?: boolean;

	/**
	 * Value between 50 and 250, total number of members where the gateway will stop sending offline members in the
	 * guild member list
	 * @defaultValue 50
	 */
	large_threshold?: number;

	/**
	 * Used for [Guild Sharding](https://discord.com/developers/docs/events/gateway#sharding)
	 */
	shard?: [shard_id: number, num_shards: number];

	/**
	 * Presence structure for initial presence information
	 */
	presence?: GatewayPresenceUpdate;

	/**
	 * {@link Intent Gateway Intents} you wish to receive
	 */
	intents: Intent;
}

