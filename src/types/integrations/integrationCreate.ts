import {Integration} from "./integration";

/**
 * Sent when an integration is created.
 *
 * @see [Integration Create](https://discord.com/developers/docs/events/gateway-events#integration-create)
 *
 * @interface
 */
export interface IntegrationCreate extends Omit<Integration, "user"> {
    /**
     * ID of the guild
     */
    guild_id: string;
}