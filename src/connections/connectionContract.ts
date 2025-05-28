import {GatewayEventPayload} from "../types";
import {ConnectionStateChangedCallback} from "./connectionStateChangedCallback";

export interface ConnectionContract {
	/**
	 * Begins listening for events from the Discord Gateway while allowing sending of events back. Promise returns when
	 * connection is closed.
	 */
	/**
	 * Begins listening for events from the Discord Gateway while allowing sending of events back.
	 * @param abortSignal - Optional AbortSignal to cancel reconnect attempts.
	 * @returns A Promise that returns when connection is closed. (e.g. after {@link stopAsync}).
	 */
	startAsync(abortSignal?: AbortSignal): Promise<void>;

	/**
	 * Send a Gateway payload (opcode + data).
	 * @param payload - The payload to send.
	 * @returns A Promise that resolves once the payload is sent.
	 */
	sendAsync<T>(payload: GatewayEventPayload<T>): Promise<void>;

	/**
	 * Gracefully shuts down the connection.
	 * @returns A Promise that resolves once the connection is fully closed.
	 */
	stopAsync(): Promise<void>;

	/**
	 * Whether the connection is connected.
	 */
	get isConnected(): boolean;

	/**
	 * Register a listener to be notified when the connection opens or closes.
	 * @param callback - Called with `true` on open, `false` on close.
	 */
	addConnectionStateChangeListener(callback: ConnectionStateChangedCallback): void;

	/**
	 * Remove a previously registered connection state listener.
	 * @param callback - The same function reference passed to {@link addConnectionStateChangeListener}.
	 */
	removeConnectionStateChangeListener(callback: ConnectionStateChangedCallback): void;
}