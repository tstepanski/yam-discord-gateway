import {InstallParams} from "./installParams";

/**
 * Application Integration Type Configuration Object
 *
 * @see [Application Integration Type Configuration Object](https://discord.com/developers/docs/resources/application#application-object-application-integration-types)
 *
 * @interface
 */
export interface IntegrationTypeConfiguration {
	/**
	 * Install params for each installation context's default in-app authorization link
	 */
	oauth2_install_params?: InstallParams;
}