import {User} from "../users";
import {UnavailableGuild} from "../guilds";
import {Application} from "../application";
import {ApiVersion} from "../general";

/**
 * The ready event is dispatched when a client has completed the initial handshake with the gateway (for new sessions).
 * The ready event can be the largest and most complex event the gateway will send, as it contains all the state
 * required for a client to begin interacting with the rest of the platform.
 *
 * {@link guilds} are the guilds of which your bot is a member. They start out as unavailable when you connect to the
 * gateway. As they become available, your bot will be notified via {@link GuildCreateEvent Guild Create} events.
 *
 * @see [Ready](https://discord.com/developers/docs/events/gateway-events#ready)
 * @interface
 */
export interface ReadyEvent {
	/**
	 * [API version](https://discord.com/developers/docs/reference#api-versioning-api-versions)
	 */
	v: ApiVersion;

	/**
	 * Information about the user including email
	 */
	user: User;

	/**
	 * Guilds the user is in
	 */
	guilds: UnavailableGuild[];

	/**
	 * Used for resuming connections
	 */
	session_id: string;

	/**
	 * Gateway URL for resuming connections
	 */
	resume_gateway_url: string;

	/**
	 * [Shard information](https://discord.com/developers/docs/events/gateway#sharding) associated with this session, if
	 * sent when identifying
	 */
	shard?: [shard_id: number, num_shards: number];

	// noinspection GrazieInspection
	/**
	 * Contains {@link Application#id id} and {@link Application#flags flags}
	 */
	application: Pick<Application, "id" | "flags">;
}
