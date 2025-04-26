/**
 * Sort Order Types
 *
 * @see [Sort Order Types](https://discord.com/developers/docs/resources/channel#channel-object-sort-order-types)
 *
 * @enum
 */
export enum SortOrderType {
	/**
	 * Sort forum posts by activity
	 */
	LATEST_ACTIVITY = 0,

	/**
	 * Sort forum posts by creation time (from most recent to oldest)
	 */
	CREATION_DATE = 1
}
