import {AbstractHeartbeatHandler} from "./abstractHeartbeatHandler";
import {Connection} from "./connection";
import {Hello} from "../types/payloads";
import {GatewayEventPayload, OpCodes} from "../types";
import {Timespan} from "../types/general";

export class HelloEventHandler extends AbstractHeartbeatHandler<Hello> {
	public constructor() {
		super(OpCodes.Hello, true);
	}

	protected override internalHandleAsync(payload: GatewayEventPayload<Hello>, connection: Connection): Promise<void> {
		const heartbeatIntervalInMilliseconds = payload.d?.heartbeat_interval;

		if (!heartbeatIntervalInMilliseconds) {
			return Promise.reject("Heartbeat interval not provided");
		}

		connection.heartbeatInterval = Timespan.fromMilliseconds(heartbeatIntervalInMilliseconds);

		return Promise.resolve();
	}
}

