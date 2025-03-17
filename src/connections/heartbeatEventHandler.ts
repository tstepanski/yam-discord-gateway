import {AbstractHeartbeatHandler} from "./abstractHeartbeatHandler";
import {Heartbeat} from "../types/payloads";
import {OpCodes} from "../types";

export class HeartbeatEventHandler extends AbstractHeartbeatHandler<Heartbeat> {
	public constructor() {
		super(OpCodes.Heartbeat, true);
	}
}