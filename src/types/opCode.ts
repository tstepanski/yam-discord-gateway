/**
 * All gateway events in Discord are tagged with an opcode that denotes the payload type. Your connection to our
 * gateway may also sometimes close. When it does, you will receive a close code that tells you what happened.
 * @see [Gateway Opcodes](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes)
 * @template T The type of the payload associated with the opcode
 */
// @ts-ignore
export interface OpCode<T> {
	/**
	 * OpCode value
	 */
	code: number;

	/**
	 * Whether the client may send this code to Discord
	 */
	client: boolean;

	/**
	 * Whether the Discord may send this code to the client
	 */
	gateway: boolean;
}
