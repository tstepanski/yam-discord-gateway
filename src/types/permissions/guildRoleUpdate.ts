import {Snowflake} from "../general";
import {Role} from "./role";

/**
 * Guild Role Update
 *
 * @see [Guild Role Update](https://discord.com/developers/docs/events/gateway-events#guild-role-update)
 *
 * @interface
 */
export interface GuildRoleUpdate {
    /**
     * ID of the guild
     */
    guild_id: Snowflake;

    /**
     * Role that was updated
     */
    role: Role;
}