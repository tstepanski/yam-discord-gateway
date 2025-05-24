/**
 * Where an app can be installed, also called its supported
 * [installation contexts](https://discord.com/developers/docs/resources/application#installation-context).
 *
 * @see [Application Integration Types](https://discord.com/developers/docs/resources/application#application-object-application-integration-types)
 *
 * @enum
 */
export enum IntegrationType {
	/**
	 * App is installable to servers
	 */
	GUILD_INSTALL = 0,

	/**
	 * App is installable to users
	 */
	USER_INSTALL = 1
}