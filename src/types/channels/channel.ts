import {Snowflake} from "../general";
import {ChannelType} from "./channelType";
import {Flag} from "./flag";
import {Overwrite} from "./overwrite";
import {User} from "../users";
import {VideoQualityMode} from "./videoQualityMode";
import {ThreadMetadata} from "./threadMetadata";
import {AutoArchiveDuration} from "./autoArchiveDuration";
import {ForumTag} from "./forumTag";
import {DefaultReaction} from "./defaultReaction";
import {SortOrderType} from "./sortOrderType";
import {ForumLayoutType} from "./forumLayoutType";
import {ThreadMember} from "./threadMember";

/**
 * Represents a guild or DM channel within Discord.
 *
 * @see [Channel Structure](https://discord.com/developers/docs/resources/channel#channel-object-channel-structure)
 *
 * @interface
 */
export interface Channel {
	/**
	 * the id of this channel
	 */
	id: Snowflake;

	/**
	 * the {@link ChannelType type of channel}
	 */
	type: ChannelType;

	/**
	 * the id of the guild (may undefined for some channel objects received over gateway guild dispatches)
	 */
	guild_id?: Snowflake;

	/**
	 * sorting position of the channel (channels with the same position are sorted by id)
	 */
	position?: number;

	/**
	 * explicit permission overwrites for members and roles
	 */
	permission_overwrites?: Overwrite[];

	/**
	 * the name of the channel (1-100 characters)
	 */
	name?: string | null;

	/**
	 * the channel topic (0-4096 characters for {@link ChannelType.GUILD_FORUM GUILD_FORUM} and
	 * {@link ChannelType.GUILD_MEDIA GUILD_MEDIA} channels, 0-1024 characters for all others)
	 */
	topic?: string | null;

	/**
	 * whether the channel is nsfw
	 */
	nsfw?: boolean;

	/**
	 * the id of the last message sent in this channel (or thread for {@link ChannelType.GUILD_FORUM GUILD_FORUM} or
	 * {@link ChannelType.GUILD_MEDIA GUILD_MEDIA} channels) (may not point to an existing or valid message or thread)
	 */
	last_message_id?: Snowflake | null;

	/**
	 * the bitrate (in bits) of the voice channel
	 */
	bitrate?: number;

	/**
	 * the user limit of the voice channel
	 */
	user_limit?: number;

	/**
	 * amount of seconds a user has to wait before sending another message (0-21600); bots, as well as users with the
	 * permission manage_messages or manage_channel, are unaffected
	 */
	rate_limit_per_user?: number;

	/**
	 * the recipients of the DM
	 */
	recipients?: User[];

	/**
	 * icon hash of the group DM
	 */
	icon?: string | null;

	/**
	 * id of the creator of the group DM or thread
	 */
	owner_id?: Snowflake;

	/**
	 * application id of the group DM creator if it is bot-created
	 */
	application_id?: Snowflake;

	/**
	 * for group DM channels: whether the channel is managed by an application via the gdm.join OAuth2 scope
	 */
	managed?: boolean;

	/**
	 * for guild channels: id of the parent category for a channel (each parent category can contain up to 50 channels),
	 * for threads: id of the text channel this thread was created
	 */
	parent_id?: Snowflake | null;

	/**
	 * when the last pinned message was pinned. This may be null in events such as
	 * {@link EventName.GuildCreate GUILD_CREATE} when a message is not pinned.
	 */
	last_pin_timestamp?: string | null; // TODO: setup datetime parsing

	/**
	 * {@link Region voice region} id for the voice channel, automatic when set to null
	 */
	rtc_region?: string | null;

	/**
	 * the camera {@link VideoQualityMode video quality mode} of the voice channel, 1 when not present
	 */
	video_quality_mode?: VideoQualityMode;

	/**
	 * number of messages (not including the initial message or deleted messages) in a thread.
	 *
	 * @remarks For threads created before July 1, 2022, the message count is inaccurate when it's greater than 50.
	 */
	message_count?: number;

	/**
	 * an approximate count of users in a thread, stops counting at 50
	 */
	member_count?: number;

	/**
	 * thread-specific fields not needed by other channels
	 */
	thread_metadata?: ThreadMetadata;

	/**
	 * thread member object for the current user, if they have joined the thread, only included on certain API endpoints
	 */
	member?: ThreadMember;

	/**
	 * default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list
	 * after the specified period of inactivity
	 */
	default_auto_archive_duration?: AutoArchiveDuration;

	/**
	 * computed permissions for the invoking user in the channel, including overwrites, only included when part of the
	 * resolved data received on a slash command interaction. This does not include
	 * [implicit permissions](https://discord.com/developers/docs/topics/permissions#implicit-permissions), which may
	 * need to be checked separately
	 */
	permissions?: string;

	/**
	 * {@link Flag channel flags} combined as a [bitfield](https://en.wikipedia.org/wiki/Bit_field)
	 */
	flags?: Flag;

	/**
	 * number of messages ever sent in a thread, it's similar to {@link message_count} on message creation, but will not
	 * decrement the number when a message is deleted
	 */
	total_message_sent?: number;

	/**
	 * the set of tags that can be used in a {@link ChannelType.GUILD_FORUM GUILD_FORUM} or
	 * a {@link ChannelType.GUILD_MEDIA GUILD_MEDIA} channel
	 */
	available_tags?: ForumTag[];

	/**
	 * the IDs of the set of tags that have been applied to a thread in a {@link ChannelType.GUILD_FORUM GUILD_FORUM} or
	 * a {@link ChannelType.GUILD_MEDIA GUILD_MEDIA} channel
	 */
	applied_tags?: Snowflake[];

	/**
	 * the emoji to show in the add reaction button on a thread in a {@link ChannelType.GUILD_FORUM GUILD_FORUM} or
	 * a {@link ChannelType.GUILD_MEDIA GUILD_MEDIA} channel
	 */
	default_reaction_emoji?: DefaultReaction | null;

	/**
	 * the initial {@link rate_limit_per_user} to set on newly created threads in a channel. this field is copied to the
	 * thread at creation time and does not live update.
	 */
	default_thread_rate_limit_per_user?: number;

	/**
	 * 	the {@link SortOrderType default sort order type} used to order posts in
	 * 	{@link ChannelType.GUILD_FORUM GUILD_FORUM} and {@link ChannelType.GUILD_MEDIA GUILD_MEDIA} channels. Defaults
	 * 	to null, which indicates a preferred sort order hasn't been set by a channel admin
	 */
	default_sort_order?: SortOrderType | null;

	/**
	 * the {@link ForumLayoutType default forum layout view} used to display posts in
	 * {@link ChannelType.GUILD_FORUM GUILD_FORUM} channels. Defaults to {@link ForumLayoutType.NOT_SET NOT_SET}, which
	 * indicates a layout view has not been set by a channel admin
	 */
	default_forum_layout?: ForumLayoutType;
}