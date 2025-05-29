import {Snowflake} from "../general";

/**
 * Sent when an integration is deleted.
 *
 * @see [Integration Delete](https://discord.com/developers/docs/events/gateway-events#integration-delete)
 *
 * @interface
 */
export interface IntegrationDelete {
    /**
     * Integration ID
     */
    id: Snowflake;

    /**
     * ID of the guild
     */
    guild_id: Snowflake;

    /**
     * ID of the bot/OAuth2 application for this discord integration
     */
    application_id?: Snowflake;
}