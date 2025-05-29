import {Snowflake} from "../general";
import {User} from "../users";

/**
 * Integration Application Structure
 *
 * @see [Integration Application Structure](https://discord.com/developers/docs/resources/guild#integration-application-object-integration-application-structure)
 *
 * @interface
 */
export interface ApplicationStructure {
    /**
     * the id of the app
     */
    id: Snowflake;

    /**
     * the name of the app
     */
    name: string;

    /**
     * the [icon hash](https://discord.com/developers/docs/reference#image-formatting) of the app
     */
    icon: string | null;

    /**
     * the description of the app
     */
    description: string;

    /**
     * the bot associated with this application
     */
    bot?: User;
}