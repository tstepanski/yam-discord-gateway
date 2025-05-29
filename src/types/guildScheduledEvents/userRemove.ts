import {Snowflake} from "../general";

/**
 * Sent when a user has unsubscribed from a guild scheduled event.
 *
 * @see [Guild Scheduled Event User Remove](https://discord.com/developers/docs/events/gateway-events#guild-scheduled-event-user-remove)
 *
 * @interface
 */
export interface UserRemove {
    /**
     * ID of the guild scheduled event
     */
    guild_scheduled_event_id: Snowflake;

    /**
     * ID of the guild
     */
    guild_id: Snowflake;

    /**
     * ID of the user
     */
    user_id: Snowflake;
}