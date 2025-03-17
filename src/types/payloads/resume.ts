/**
 * Used to replay missed events when a disconnected client resumes.
 *
 * Details about resuming are in the
 * [Gateway documentation](https://discord.com/developers/docs/events/gateway#resuming).
 *
 * @example
 * {
 *   "op": 6,
 *   "d": {
 *     "token": "randomstring",
 *     "session_id": "evenmorerandomstring",
 *     "seq": 1337
 *   }
 * }
 *
 * @see [Resume Structure](https://discord.com/developers/docs/events/gateway-events#resume-resume-structure)
 * @interface
 */
export interface Resume {
	/**
	 * Session token
	 */
	token: string;

	/**
	 * Session ID
	 */
	session_id: string;

	/**
	 * Last sequence number received
	 */
	seq: number;
}