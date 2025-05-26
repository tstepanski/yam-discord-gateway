import {Snowflake} from "../general";
import {User} from "../users";
import {PrivacyLevel} from "./privacyLevel";
import {Status} from "./status";
import {EntityType} from "./entityType";
import {EntityMetadata} from "./entityMetadata";
import {RecurrenceRule} from "./recurrenceRule";

/**
 * A representation of a scheduled event in a {@link Guild}.
 *
 * @see [Guild Scheduled Event Object](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object)
 *
 * @interface
 */
export interface GuildScheduledEvent {
	/**
	 * the id of the scheduled event
	 */
	id: Snowflake;

	/**
	 * the guild id which the scheduled event belongs to
	 */
	guild_id: Snowflake;

	/**
	 * the channel id in which the scheduled event will be hosted, or `null` if scheduled entity type is `EXTERNAL`
	 */
	channel_id: Snowflake | null;

	/**
	 * the id of the user that created the scheduled event
	 */
	creator_id?: Snowflake | null;

	/**
	 * the name of the scheduled event (1–100 characters)
	 */
	name: string;

	/**
	 * the description of the scheduled event (1–1000 characters)
	 */
	description?: string | null;

	/**
	 * the time the scheduled event will start
	 */
	scheduled_start_time: string | Date; // TODO: setup date parsing

	/**
	 * the time the scheduled event will end, required if `entity_type` is EXTERNAL
	 */
	scheduled_end_time: string | Date | null; // TODO: setup date parsing

	/**
	 * the privacy level of the scheduled event
	 */
	privacy_level: PrivacyLevel;

	/**
	 * the status of the scheduled event
	 */
	status: Status;

	/**
	 * the type of the scheduled event
	 */
	entity_type: EntityType;

	/**
	 * the id of an entity associated with a guild scheduled event
	 */
	entity_id: Snowflake | null;

	/**
	 * additional metadata for the guild scheduled event
	 */
	entity_metadata: EntityMetadata | null;

	/**
	 * the user that created the scheduled event
	 */
	creator?: User;

	/**
	 * the number of users subscribed to the scheduled event
	 */
	user_count?: number;

	/**
	 * the [cover image hash](https://discord.com/developers/docs/reference#image-formatting) of the scheduled event
	 */
	image?: string | null;

	/**
	 * the definition for how often this event should recur
	 */
	recurrence_rule: RecurrenceRule | null;
}