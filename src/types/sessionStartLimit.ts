/**
 * Metadata that can help during the operation of large or
 * [sharded](https://discord.com/developers/docs/events/gateway#sharding) bots.
 */
export interface SessionStartLimit {
	/**
	 * Total number of session starts the current user is allowed
	 */
	total: number;

	/**
	 * Remaining number of session starts the current user is allowed
	 */
	remaining: number;

	/**
	 * Number of milliseconds after which the limit resets
	 */
	reset_after: number;

	/**
	 * Number of identify requests allowed per 5 seconds
	 */
	max_concurrency: number;
}