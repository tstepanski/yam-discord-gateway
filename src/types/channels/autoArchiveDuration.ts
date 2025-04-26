/**
 * Threads will stop showing in the channel list after the specified period of inactivity
 */
export enum AutoArchiveDuration {
	/**
	 * 60 minutes or 1 hour
	 */
	OneHour = 60,

	/**
	 * 1440 minutes or 1 day
	 */
	OneDay = 1440,

	/**
	 * 4320 minutes or 3 days
	 */
	ThreeDays = 4320,

	/**
	 * 10,080 minutes or 1 week
	 */
	OneWeek = 10080
}