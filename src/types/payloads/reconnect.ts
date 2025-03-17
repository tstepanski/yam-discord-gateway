/**
 * The reconnect event is dispatched when a client should reconnect to the gateway (and resume their existing session,
 * if they have one). This can occur at any point in the gateway connection lifecycle, even before/in place of receiving
 * a {@link Hello} event. A few seconds after the reconnect event is dispatched, the connection may be closed by the
 * server.
 *
 * @example
 * {
 *   "op": 7,
 *   "d": null
 * }
 *
 * @see [Reconnect](https://discord.com/developers/docs/events/gateway-events#reconnect)
 * @interface
 */
export interface Reconnect {
}