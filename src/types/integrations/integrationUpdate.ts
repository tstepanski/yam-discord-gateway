import {Integration} from "./integration";

/**
 * Sent when an integration is updated.
 *
 * @see [Integration Update](https://discord.com/developers/docs/events/gateway-events#integration-update)
 *
 * @interface
 */
export interface IntegrationUpdate extends Omit<Integration, "user"> {
    /**
     * ID of the guild
     */
    guild_id: string;
}