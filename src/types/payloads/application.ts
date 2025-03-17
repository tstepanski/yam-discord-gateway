import {ApplicationFlag} from "./applicationFlag";
import {Snowflake} from "../general";

/**
 * @see [Application](https://discord.com/developers/docs/resources/application#application-object-application-structure)
 */
export interface Application {
	/**
	 * ID of the app
	 */
	id: Snowflake;

	/**
	 * Name of the app
	 */
	name: string;

	/**
	 * [Icon hash](https://discord.com/developers/docs/reference#image-formatting) of the app
	 */
	icon?: string;

	/**
	 * App's public {@link ApplicationFlag flags}
	 */
	flags?: ApplicationFlag;

	// TODO: fill out
}

