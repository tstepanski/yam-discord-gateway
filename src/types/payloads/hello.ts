/**
 * Sent on connection to the websocket. Defines the heartbeat interval that an app should heartbeat to.
 *
 * @example
 * {
 *   "op": 10,
 *   "d": {
 *     "heartbeat_interval": 45000
 *   }
 * }
 *
 * @see [Hello Structure](https://discord.com/developers/docs/events/gateway-events#hello-hello-structure)
 * @interface
 */
export interface Hello {
	/**
	 * Interval (in milliseconds) an app should heartbeat with
	 */
	heartbeat_interval: number;
}