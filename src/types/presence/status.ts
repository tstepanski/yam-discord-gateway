/**
 * Presence Status
 *
 * @see [Presence Update](https://discord.com/developers/docs/events/gateway-events#presence-update)
 *
 * @enum
 */
export enum Status {
	/**
	 * Idle
	 */
	Idle = "idle",

	/**
	 * Do not disturb
	 */
	DoNotDisturb = "dnd",

	/**
	 * Online
	 */
	Online = "online",

	/**
	 * Offline
	 */
	Offline = "offline"
}