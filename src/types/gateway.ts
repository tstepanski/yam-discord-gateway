/**
 * Basic response from [Get Gateway](https://discord.com/developers/docs/events/gateway#get-gateway). An object with a
 * valid WSS URL which the app can use when [Connecting](https://discord.com/developers/docs/events/gateway#connecting)
 * to the Gateway. Apps should cache this value and only call this endpoint to retrieve a new URL when they are unable
 * to properly establish a connection using the cached one.
 */
export interface Gateway {
	/**
	 * WSS URL that can be used for connecting to the Gateway
	 */
	url: string;
}
