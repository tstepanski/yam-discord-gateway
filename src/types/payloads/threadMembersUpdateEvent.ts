import {Snowflake} from "../general";

export interface ThreadMembersUpdateEvent {
	id: Snowflake;

	guild_id: Snowflake;

	member_count: number;

	// TODO: fill out
}