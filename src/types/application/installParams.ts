import {Scopes} from "../oauth2";
import {Permission} from "../permissions";

/**
 * Install Params Object
 *
 * @see [Install Params Object](https://discord.com/developers/docs/resources/application#install-params-object)
 *
 * @interface
 */
export interface InstallParams {
	scopes: Scopes[];

	permissions: string | Permission; // TODO: setup deserialization
}