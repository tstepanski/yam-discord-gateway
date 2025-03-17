// noinspection GrazieInspection
/**
 * Sent to indicate one of at least three different situations:
 * - the gateway could not initialize a session after receiving an {@link OpCodes.Identify Opcode 2 Identify}
 * - the gateway could not resume a previous session after receiving an {@link OpCodes.Resume Opcode 6 Resume}
 * - the gateway has invalidated an active session and is requesting client action
 *
 * The inner {@link GatewayEventPayload#d d} key is a boolean that indicates whether the session may be resumable. See
 * [Connecting](https://discord.com/developers/docs/events/gateway#connecting) and
 * [Resuming](https://discord.com/developers/docs/events/gateway#resuming) for more information.
 *
 * @example
 * {
 *   "op": 9,
 *   "d": false
 * }
 *
 * @see [Invalid Session](https://discord.com/developers/docs/events/gateway-events#invalid-session)
 */
export type InvalidSession = boolean;
