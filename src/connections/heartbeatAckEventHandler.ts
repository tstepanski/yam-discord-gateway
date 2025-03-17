import {AbstractHeartbeatHandler} from "./abstractHeartbeatHandler";
import {Connection} from "./connection";
import {Heartbeat} from "../types/payloads";
import {GatewayEventPayload, OpCodes} from "../types";

export class HeartbeatAckEventHandler extends AbstractHeartbeatHandler<Heartbeat> {
	public constructor() {
		super(OpCodes.HeartbeatACK);
	}

	protected override internalHandleAsync(_: GatewayEventPayload<Heartbeat>, connection: Connection): Promise<void> {
		return connection.sendIdentificationAsync();
	}
}