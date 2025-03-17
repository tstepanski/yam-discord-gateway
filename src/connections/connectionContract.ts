import {GatewayEventPayload} from "../types";

export interface ConnectionContract {
	/**
	 * Begins listening for events from the Discord Gateway while allowing sending of events back. Promise returns when
	 * connection is closed.
	 */
	startAsync(): Promise<void>;

	sendAsync<T>(payload: GatewayEventPayload<T>): Promise<void>;

	stopAsync(): Promise<void>;
}