// noinspection GrazieInspection
/**
 * Used to maintain an active gateway connection. Must be sent every
 * {@link Hello#heartbeat_interval heartbeat_interval} milliseconds after
 * the {@link OpCodes.Hello Opcode 10 Hello} payload is received. The inner {@link GatewayEventPayload#d d} key is the
 * last sequence number—{@link GatewayEventPayload#s s}—received by the client. If you have not yet
 * received one, send null.
 *
 * Details about heartbeats are in the
 * [Gateway documentation](https://discord.com/developers/docs/events/gateway#sending-heartbeats).
 *
 * @example
 * {
 *   "op": 1,
 *   "d": 251
 * }
 *
 * @see [Heartbeat](https://discord.com/developers/docs/events/gateway-events#heartbeat)
 * @interface
 */
export type Heartbeat = number;
