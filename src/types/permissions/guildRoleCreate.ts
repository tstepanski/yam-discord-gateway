import {Snowflake} from "../general";
import {Role} from "./role";

/**
 * Guild Role Create
 *
 * @see [Guild Role Create](https://discord.com/developers/docs/events/gateway-events#guild-role-create)
 *
 * @interface
 */
export interface GuildRoleCreate {
    /**
     * ID of the guild
     */
    guild_id: Snowflake;

    /**
     * Role that was created
     */
    role: Role;
}