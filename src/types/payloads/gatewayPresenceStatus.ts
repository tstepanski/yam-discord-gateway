/**
 * Status Types
 *
 * @see [Status Types](https://discord.com/developers/docs/events/gateway-events#update-presence-status-types)
 * @enum
 */
export enum GatewayPresenceStatus {
	/**
	 * Online
	 */
	Online = "online",

	/**
	 * Do Not Disturb
	 */
	DoNotDisturb = "dnd",

	/**
	 * AFK
	 */
	Idle = "idle",

	/**
	 * Invisible and shown as offline
	 */
	Invisible = "invisible",

	/**
	 * Offline
	 */
	Offline = "offline"
}