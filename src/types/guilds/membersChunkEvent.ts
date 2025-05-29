import {Snowflake} from "../general";
import {GuildMember} from "./guildMember";
import {PresenceUpdate} from "../presence";

/**
 * Sent in response to {@link RequestMembers Guild Members Request}. You can use the `chunk_index` and `chunk_count` to
 * calculate how many chunks are left for your request.
 *
 * @see [Guild Members Chunk](https://discord.com/developers/docs/events/gateway-events#guild-members-chunk)
 *
 * @interface
 */
export interface MembersChunkEvent {
    /**
     * ID of the guild
     */
    guild_id: Snowflake;

    /**
     * Set of guild members
     */
    members: GuildMember[];

    /**
     * Chunk index in the expected chunks for this response `(0 <= chunk_index < chunk_count)`
     */
    chunk_index: number;

    /**
     * Total number of expected chunks for this response
     */
    chunk_count: number;

    /**
     * When passing an invalid ID to `REQUEST_GUILD_MEMBERS`, it will be returned here
     */
    not_found?: Snowflake[];

    /**
     * When passing `true` to `REQUEST_GUILD_MEMBERS`, presences of the returned members will be here
     */
    presences?: PresenceUpdate;

    /**
     * Nonce used in the {@link RequestMembers Guild Members Request}
     */
    nonce?: string;
}