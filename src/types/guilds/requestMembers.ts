import {Snowflake} from "../general";

/**
 * Used to request all members for a guild or a list of guilds. When initially connecting, if you don't have the
 * {@link Intent.GUILD_PRESENCES GUILD_PRESENCES} Gateway Intent, or if the guild is over 75k members, it will only send
 * members who are in voice, plus the member for you (the connecting user). Otherwise, if a guild has over
 * {@link Identify#large_threshold large_threshold} members, it will only send members who are online, have a role, have
 * a nickname, or are in a voice channel, and if it has under {@link Identify#large_threshold large_threshold} members,
 * it will send all members. If a client wishes to receive additional members, they need to explicitly request them via
 * this operation. The server will send {@link GuildMembersChunkEvent Guild Members Chunk events} in response with up to
 * 1000 members per chunk until all members that match the request have been sent.
 *
 * Due to our privacy and infrastructural concerns with this feature, there are some limitations that apply:
 *
 * - {@link Intent.GUILD_PRESENCES GUILD_PRESENCES} intent is required to set {@link presences} = true. Otherwise, it
 * will always be false
 * - {@link Intent.GUILD_MEMBERS GUILD_MEMBERS} intent is required to request the entire member list—({@link query}=‘’,
 * {@link limit}=0<=n)
 * - You will be limited to requesting 1 {@link guild_id} per request
 * - Requesting a prefix ({@link query} parameter) will return a maximum of 100 members
 * - Requesting {@link user_ids} will continue to be limited to returning 100 members
 *
 * @example
 * {
 *   "op": 8,
 *   "d": {
 *     "guild_id": "41771983444115456",
 *     "query": "",
 *     "limit": 0
 *   }
 * }
 *
 * @see [Request Guild Members Structure](https://discord.com/developers/docs/events/gateway-events#request-guild-members-request-guild-members-structure)
 *
 * @interface
 */
export interface RequestMembers {
	/**
	 * ID of the guild to get members for
	 */
	guild_id: Snowflake;

	/**
	 * string that username starts with, or an empty string to return all members
	 *
	 * (Required: one of {@link query} or {@link user_ids})
	 */
	query?: string;

	/**
	 * maximum number of members to send matching the {@link query}; a limit of 0 can be used with an empty string
	 * {@link query} to return all members
	 */
	limit: number;

	/**
	 * used to specify if we want the presences of the matched members
	 */
	presences?: boolean;

	/**
	 * used to specify which users you wish to fetch
	 *
	 * (Required: one of {@link query} or {@link user_ids})
	 */
	user_ids?: Snowflake | Snowflake[];

	/**
	 * nonce to identify the {@link GuildMembersChunkEvent Guild Members Chunk} response
	 *
	 * Nonce can only be up to 32 bytes. If you send an invalid nonce it will be ignored and the reply
	 * {@link GuildMembersChunkEvent Guild Members Chunk(s)} will not have a nonce set.
	 */
	nonce: string;
}

