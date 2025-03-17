// noinspection GrazieInspection
/**
 * Gateway event payloads have a common structure, but the contents of the associated data
 * ({@link GatewayEventPayload#d d}) varies between the different events.
 *
 * Note: {@link GatewayEventPayload#s s} and {@link GatewayEventPayload#t t} are null when
 * {@link GatewayEventPayload#op op} is not 0
 * ([Gateway Dispatch opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes)).
 * @example
 * {
 *   "op": 0,
 *   "d": {},
 *   "s": 42,
 *   "t": "GATEWAY_EVENT_NAME"
 * }
 * @interface
 */
export interface GatewayEventPayload<T> {
	/**
	 * [Gateway opcode](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes),
	 * which indicates the payload type
	 */
	op: number;

	/**
	 * Event data
	 */
	d?: T;

	/**
	 * Sequence number of event used for
	 * [resuming sessions](https://discord.com/developers/docs/events/gateway#resuming) and
	 * [heartbeating](https://discord.com/developers/docs/events/gateway#sending-heartbeats)
	 */
	s?: number;

	/**
	 * Event name
	 */
	t?: string;
}
