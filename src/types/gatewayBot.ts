import {SessionStartLimit} from "./sessionStartLimit";
import {Gateway} from "./gateway";

/**
 * Response from [Get Gateway Bot](https://discord.com/developers/docs/events/gateway#get-gateway-bot)
 * endpoint. An object based on the information in {@link Gateway}, plus additional metadata that can help during the
 * operation of large or [sharded](https://discord.com/developers/docs/events/gateway#sharding) bots. Unlike the
 * Get Gateway, this route should not be cached for extended periods of time as the value is not guaranteed to be the
 * same per-call, and changes as the bot joins/leaves guilds.
 */
export interface GatewayBot extends Gateway {
	/**
	 * Recommended number of [shards](https://discord.com/developers/docs/events/gateway#sharding) to use when
	 * connecting
	 */
	shards: number;

	/**
	 * Information on the current session start limit
	 */
	session_start_limit: SessionStartLimit;
}