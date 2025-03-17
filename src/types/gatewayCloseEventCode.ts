/**
 * In order to prevent broken reconnect loops, you should consider some close codes as a signal to stop reconnecting.
 * This can be because your token expired, or your identification is invalid. This table explains what the application
 * defined close codes for the gateway are, and which close codes you should not attempt to reconnect.
 * @see [Gateway Close Event Codes](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes)
 */
export interface GatewayCloseEventCode {
	/**
	 * Event code value
	 */
	code: number;

	/**
	 * Whether reconnecting should be attempted
	 */
	reconnect: boolean;
}
