/**
 * Guild Scheduled Event Status
 *
 * @remarks Once status is set to COMPLETED or CANCELED, the status can no longer be updated
 *
 * @see [Guild Scheduled Event Status](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-status)
 *
 * @enum
 */
export enum Status {

	/**
	 * SCHEDULED
	 */
	SCHEDULED = 1,

	/**
	 * ACTIVE
	 */
	ACTIVE = 2,

	/**
	 * COMPLETED
	 *
	 * @remarks Once status is set to COMPLETED or CANCELED, the status can no longer be updated
	 */
	COMPLETED = 3,

	/**
	 * CANCELED
	 *
	 * @remarks Once status is set to COMPLETED or CANCELED, the status can no longer be updated
	 */
	CANCELED = 4
}