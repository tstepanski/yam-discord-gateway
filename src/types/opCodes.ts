import {OpCode} from "./opCode";
import {
	GatewayPresenceUpdate,
	Heartbeat,
	Hello,
	Identify, InvalidSession,
	ReadyEvent,
	Reconnect,
	RequestGuildMembers,
	RequestSoundboardSounds,
	Resume, UpdateVoiceState
} from "./payloads";
import {UnknownEventCodeError} from "./exceptions";

/**
 * All gateway events in Discord are tagged with an opcode that denotes the payload type. Your connection to our
 * gateway may also sometimes close. When it does, you will receive a close code that tells you what happened.
 * @see [Gateway Opcodes](https://discord.com/developers/docs/topics/opcodes-and-status-codes#gateway-gateway-opcodes)
 */
export class OpCodes {
	// noinspection JSUnusedLocalSymbols
	private constructor() {
	}

	/**
	 * An event was dispatched.
	 */
	public static readonly Dispatch: OpCode<ReadyEvent> = Object.seal({code: 0, client: false, gateway: true});

	/**
	 * Fired periodically by the client to keep the connection alive.
	 */
	public static readonly Heartbeat: OpCode<Heartbeat> = Object.seal({code: 1, client: true, gateway: true});

	/**
	 * Starts a new session during the initial handshake.
	 */
	public static readonly Identify: OpCode<Identify> = Object.seal({code: 2, client: true, gateway: false});

	/**
	 * Update the client's presence.
	 */
	public static readonly PresenceUpdate: OpCode<GatewayPresenceUpdate> =
		Object.seal({code: 3, client: true, gateway: false});

	/**
	 * Used to join/leave or move between voice channels.
	 */
	public static readonly VoiceStateUpdate: OpCode<UpdateVoiceState> =
		Object.seal({code: 4, client: true, gateway: false});

	/**
	 * Resume a previous session that was disconnected.
	 */
	public static readonly Resume: OpCode<Resume> = Object.seal({code: 6, client: true, gateway: false});

	/**
	 * You should attempt to reconnect and resume immediately.
	 */
	public static readonly Reconnect: OpCode<Reconnect> = Object.seal({code: 7, client: false, gateway: true});

	/**
	 * Request information about offline guild members in a large guild.
	 */
	public static readonly RequestGuildMembers: OpCode<RequestGuildMembers> =
		Object.seal({code: 8, client: true, gateway: false});

	/**
	 * The session has been invalidated. You should reconnect and identify/resume accordingly.
	 */
	public static readonly InvalidSession: OpCode<InvalidSession> =
		Object.seal({code: 9, client: false, gateway: true});

	/**
	 * Sent immediately after connecting, contains the heartbeat\_interval to use.
	 */
	public static readonly Hello: OpCode<Hello> = Object.seal({code: 10, client: false, gateway: true});

	/**
	 * Sent in response to receiving a heartbeat to acknowledge that it has been received.
	 */
	public static readonly HeartbeatACK: OpCode<Heartbeat> = Object.seal({code: 11, client: false, gateway: true});

	/**
	 * Request information about soundboard sounds in a set of guilds.
	 */
	public static readonly RequestSoundboardSounds: OpCode<RequestSoundboardSounds> =
		Object.seal({code: 31, client: true, gateway: false});


	private static readonly codeMap: Record<number, OpCode<any>> = {
		[OpCodes.Dispatch.code]: OpCodes.Dispatch,
		[OpCodes.Identify.code]: OpCodes.Identify,
		[OpCodes.PresenceUpdate.code]: OpCodes.PresenceUpdate,
		[OpCodes.VoiceStateUpdate.code]: OpCodes.VoiceStateUpdate,
		[OpCodes.Resume.code]: OpCodes.Resume,
		[OpCodes.Reconnect.code]: OpCodes.Reconnect,
		[OpCodes.RequestGuildMembers.code]: OpCodes.RequestGuildMembers,
		[OpCodes.InvalidSession.code]: OpCodes.InvalidSession,
		[OpCodes.Hello.code]: OpCodes.Hello,
		[OpCodes.HeartbeatACK.code]: OpCodes.HeartbeatACK,
		[OpCodes.RequestSoundboardSounds.code]: OpCodes.RequestSoundboardSounds
	};

	/**
	 * Get opCode by numeric value
	 * @param codeValue numeric value of the code
	 * @exception UnknownEventCodeError if code value is not registered
	 */
	public static getByCode(codeValue: number): OpCode<any> {
		const eventCode = this.codeMap[codeValue];

		if (eventCode) {
			return eventCode;
		}

		throw new UnknownEventCodeError(codeValue);
	}
}

Object.freeze(OpCodes);
