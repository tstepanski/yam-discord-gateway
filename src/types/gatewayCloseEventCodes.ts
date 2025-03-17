import {GatewayCloseEventCode} from "./gatewayCloseEventCode";
import {UnknownEventCodeError} from "./exceptions";

/**
 * In order to prevent broken reconnect loops, you should consider some close codes as a signal to stop reconnecting.
 * This can be because your token expired, or your identification is invalid. This table explains what the application
 * defined close codes for the gateway are, and which close codes you should not attempt to reconnect.
 * @see [Gateway Close Event Codes](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-close-event-codes)
 */
export class GatewayCloseEventCodes {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
	}

	/**
	 * We're not sure what went wrong. Try reconnecting?
	 */
	public static readonly UnknownError: GatewayCloseEventCode = Object.seal({code: 4000, reconnect: true});

	/**
	 * You sent an invalid Gateway opcode or an invalid payload for an opcode. Don't do that!
	 */
	public static readonly UnknownOpcode: GatewayCloseEventCode = Object.seal({code: 4001, reconnect: true});

	/**
	 * You sent an invalid payload to Discord. Don't do that!
	 */
	public static readonly DecodeError: GatewayCloseEventCode = Object.seal({code: 4002, reconnect: true});

	/**
	 * You sent us a payload prior to identifying, or this session has been invalidated.
	 */
	public static readonly NotAuthenticated: GatewayCloseEventCode = Object.seal({code: 4003, reconnect: true});

	/**
	 * The account token sent with your identify payload is incorrect.
	 */
	public static readonly AuthenticationFailed: GatewayCloseEventCode = Object.seal({code: 4004, reconnect: false});

	/**
	 * You sent more than one identify payload. Don't do that!
	 */
	public static readonly AlreadyAuthenticated: GatewayCloseEventCode = Object.seal({code: 4005, reconnect: true});

	/**
	 * The sequence sent when resuming the session was invalid. Reconnect and start a new session.
	 */
	public static readonly InvalidSeq: GatewayCloseEventCode = Object.seal({code: 4007, reconnect: true});

	/**
	 * Woah nelly! You're sending payloads to us too quickly. Slow it down! You will be disconnected on receiving this.
	 */
	public static readonly RateLimited: GatewayCloseEventCode = Object.seal({code: 4008, reconnect: true});

	/**
	 * Your session timed out. Reconnect and start a new one.
	 */
	public static readonly SessionTimedOut: GatewayCloseEventCode = Object.seal({code: 4009, reconnect: true});

	/**
	 * You sent us an invalid shard when identifying.
	 */
	public static readonly InvalidShard: GatewayCloseEventCode = Object.seal({code: 4010, reconnect: false});

	/**
	 * The session would have handled too many guilds - you are required to shard your connection in order to connect.
	 */
	public static readonly ShardingRequired: GatewayCloseEventCode = Object.seal({code: 4011, reconnect: false});

	/**
	 * You sent an invalid version for the gateway.
	 */
	public static readonly InvalidAPIVersion: GatewayCloseEventCode = Object.seal({code: 4012, reconnect: false});

	/**
	 * You sent an invalid intent for a Gateway Intent. You may have incorrectly calculated the bitwise value.
	 */
	public static readonly InvalidIntent: GatewayCloseEventCode = Object.seal({code: 4013, reconnect: false});

	/**
	 * You sent a disallowed intent for a Gateway Intent. You may have tried to specify an intent that you have not
	 * enabled or are not approved for.
	 */
	public static readonly DisallowedIntent: GatewayCloseEventCode = Object.seal({code: 4014, reconnect: false});

	private static readonly codeMap: Record<number, GatewayCloseEventCode> = {
		[GatewayCloseEventCodes.UnknownError.code]: GatewayCloseEventCodes.UnknownError,
		[GatewayCloseEventCodes.UnknownOpcode.code]: GatewayCloseEventCodes.UnknownOpcode,
		[GatewayCloseEventCodes.DecodeError.code]: GatewayCloseEventCodes.DecodeError,
		[GatewayCloseEventCodes.NotAuthenticated.code]: GatewayCloseEventCodes.NotAuthenticated,
		[GatewayCloseEventCodes.AuthenticationFailed.code]: GatewayCloseEventCodes.AuthenticationFailed,
		[GatewayCloseEventCodes.AlreadyAuthenticated.code]: GatewayCloseEventCodes.AlreadyAuthenticated,
		[GatewayCloseEventCodes.InvalidSeq.code]: GatewayCloseEventCodes.InvalidSeq,
		[GatewayCloseEventCodes.RateLimited.code]: GatewayCloseEventCodes.RateLimited,
		[GatewayCloseEventCodes.SessionTimedOut.code]: GatewayCloseEventCodes.SessionTimedOut,
		[GatewayCloseEventCodes.InvalidShard.code]: GatewayCloseEventCodes.InvalidShard,
		[GatewayCloseEventCodes.ShardingRequired.code]: GatewayCloseEventCodes.ShardingRequired,
		[GatewayCloseEventCodes.InvalidAPIVersion.code]: GatewayCloseEventCodes.InvalidAPIVersion,
		[GatewayCloseEventCodes.InvalidIntent.code]: GatewayCloseEventCodes.InvalidIntent,
		[GatewayCloseEventCodes.DisallowedIntent.code]: GatewayCloseEventCodes.DisallowedIntent
	};

	/**
	 * Get event code by numeric value
	 * @param codeValue numeric value of the code
	 * @exception UnknownEventCodeError if code value is not registered
	 */
	public static getByCode(codeValue: number): GatewayCloseEventCode {
		const eventCode = this.codeMap[codeValue];

		if (eventCode) {
			return eventCode;
		}

		throw new UnknownEventCodeError(codeValue);
	}
}

Object.freeze(GatewayCloseEventCodes);