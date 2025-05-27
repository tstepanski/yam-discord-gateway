/**
 * Active sessions are indicated with an "online", "idle", or "dnd" string per platform. If a user is offline or
 * invisible, the corresponding field is not present.
 *
 * @see [Client Status Object](https://discord.com/developers/docs/events/gateway-events#client-status-object)
 *
 * @interface
 */
export interface ClientStatus {
	/**
	 * User's status set for an active desktop (Windows, Linux, Mac) application session
	 */
	desktop?: string;

	/**
	 * User's status set for an active mobile (iOS, Android) application session
	 */
	mobile?: string;

	/**
	 * User's status set for an active web (browser, bot user) application session
	 */
	web?: string;
}