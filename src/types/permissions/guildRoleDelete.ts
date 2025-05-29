import {Snowflake} from "../general";

/**
 * Guild Role Delete
 *
 * @see [Guild Role Delete](https://discord.com/developers/docs/events/gateway-events#guild-role-delete)
 *
 * @interface
 */
export interface GuildRoleDelete {
    /**
     * ID of the guild
     */
    guild_id: Snowflake;

    /**
     * ID of the role
     */
    role_id: Snowflake;
}