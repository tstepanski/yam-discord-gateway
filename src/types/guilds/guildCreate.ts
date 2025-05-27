import {Guild} from "./guild";
import {VoiceState} from "../voice";
import {GuildMember} from "./guildMember";
import {GuildScheduledEvent} from "../guildScheduledEvents";
import {Channel} from "../channels";
import {PresenceUpdate} from "../presence";
import {SoundboardSound} from "../soundboard";
import {StageInstance} from "../stageInstances";

/**
 * @inheritDoc
 *
 * @remarks If your bot does not have the `GUILD_PRESENCES`
 * [Gateway Intent](https://discord.com/developers/docs/events/gateway#gateway-intents), or if the guild has over 75k
 * members, members and presences returned in this event will only contain your bot and users in voice channels.
 *
 * @see [Guild Create](https://discord.com/developers/docs/events/gateway-events#guild-create)
 *
 * @interface
 */
export interface GuildCreate extends Guild {
	/**
	 * When this guild was joined at
	 */
	joined_at: string | Date; // TODO: setup date parsing

	/**
	 * `true` if this is considered a large guild
	 */
	large: boolean;

	/**
	 * `true` if this guild is unavailable due to an outage
	 */
	unavailable?: boolean;

	/**
	 * Total number of members in this guild
	 */
	member_count: number;

	/**
	 * States of members currently in voice channels; lacks the `guild_id` key
	 */
	voice_states: Omit<VoiceState, "guild_id">;

	/**
	 * Users in the guild
	 */
	members: GuildMember[];

	/**
	 * Channels in the guild
	 */
	channels: Channel[];

	/**
	 * All active threads in the guild that current user has permission to view
	 */
	threads: Channel[];

	/**
	 * Presences of the members in the guild, will only include non-offline members if the size is greater than
	 * `large threshold`
	 */
	presences: Partial<PresenceUpdate>[];

	/**
	 * Stage instances in the guild
	 */
	stage_instances: StageInstance[];

	/**
	 * Scheduled events in the guild
	 */
	guild_scheduled_events: GuildScheduledEvent[];

	/**
	 * Soundboard sounds in the guild
	 */
	soundboard_sounds: SoundboardSound[];
}