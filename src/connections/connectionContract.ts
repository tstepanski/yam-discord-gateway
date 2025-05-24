import {GatewayEventPayload} from "../types";
import {ConnectionStateChangedCallback} from "./connectionStateChangedCallback";

export interface ConnectionContract {
	/**
	 * Begins listening for events from the Discord Gateway while allowing sending of events back. Promise returns when
	 * connection is closed.
	 */
	startAsync(abortSignal?: AbortSignal): Promise<void>;

	sendAsync<T>(payload: GatewayEventPayload<T>): Promise<void>;

	stopAsync(): Promise<void>;

	get isConnected(): boolean;

	addConnectionStateChangeListener(callback: ConnectionStateChangedCallback): void;

	removeConnectionStateChangeListener(callback: ConnectionStateChangedCallback): void;
}