import {Snowflake} from "../general";
import {PrivacyLevel} from "./privacyLevel";

/**
 * A Stage Instance holds information about a live stage.
 *
 * @see [Stage Instance Object](https://discord.com/developers/docs/resources/stage-instance#stage-instance-object)
 *
 * @example
 * {
 *   "id": "840647391636226060",
 *   "guild_id": "197038439483310086",
 *   "channel_id": "733488538393510049",
 *   "topic": "Testing Testing, 123",
 *   "privacy_level": 1,
 *   "discoverable_disabled": false,
 *   "guild_scheduled_event_id": "947656305244532806"
 * }
 *
 * @interface
 */
export interface StageInstance {
	/**
	 * The id of this Stage instance
	 */
	id: Snowflake;

	/**
	 * The guild id of the associated Stage channel
	 */
	guild_id: Snowflake;

	/**
	 * The id of the associated Stage channel
	 */
	channel_id: Snowflake;

	/**
	 * The topic of the Stage instance (1-120 characters)
	 */
	topic: string;

	/**
	 * The {@link PrivacyLevel privacy level} of the Stage instance
	 */
	privacy_level: PrivacyLevel;

	/**
	 * Whether Stage Discovery is disabled
	 *
	 * @deprecated
	 */
	discoverable_disabled: boolean;

	/**
	 * The id of the scheduled event for this Stage instance
	 */
	guild_scheduled_event_id: Snowflake | null;
}