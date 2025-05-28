import {Snowflake} from "../general";
import {AvatarDecorationData, User} from "../users";
import {GuildMemberFlags} from "./guildMemberFlags";

/**
 * Sent when a guild member is updated. This will also fire when the user object of a guild member changes.
 *
 * @remarks If using {@link Intent Gateway Intents}, the `GUILD_MEMBERS` intent will be required to receive this event.
 *
 * @see [Guild Member Update](https://discord.com/developers/docs/events/gateway-events#guild-member-update)
 *
 * @interface
 */
export interface GuildMemberUpdate {
    /**
     * the user this guild member represents
     */
    user: User;

    /**
     * this user's guild nickname
     */
    nick?: string | null;

    /**
     * the member's [guild avatar hash](https://discord.com/developers/docs/reference#image-formatting)
     */
    avatar: string | null;

    /**
     * the member's [guild banner hash](https://discord.com/developers/docs/reference#image-formatting)
     */
    banner: string | null;

    /**
     * array of {@link Role} object ids
     */
    roles: Snowflake[];

    /**
     * when the user joined the guild
     */
    joined_at: string | Date | null; // TODO: setup date parsing

    /**
     * when the user started [boosting](https://support.discord.com/hc/en-us/articles/360028038352-Server-Boosting-) the
     * guild
     */
    premium_since?: string | Date | null; // TODO: setup date parsing

    /**
     * whether the user is deafened in voice channels
     */
    deaf?: boolean;

    /**
     * whether the user is muted in voice channels
     */
    mute?: boolean;

    /**
     * {@link GuildMemberFlags} represented as a bit set, defaults to `0`
     */
    flags?: GuildMemberFlags;

    /**
     * whether the user has not yet passed the guild's
     * [Membership Screening](https://support.discord.com/hc/en-us/articles/1500000466882-Rules-Screening-FAQ)
     * requirements
     *
     * @remarks In `GUILD_` events, `pending` will always be included as `true` or `false`. In non `GUILD_` events which
     * can only be triggered by non-`pending` users, `pending` will not be defined.
     */
    pending?: boolean;

    /**
     * when the user's [timeout](https://support.discord.com/hc/en-us/articles/4413305239191-Time-Out-FAQ) will expire
     * and the user will be able to communicate in the guild again, null or a time in the past if the user is not timed
     * out
     */
    communication_disabled_until?: string | Date | null; // TODO: setup date parsing

    /**
     * data for the member's guild avatar decoration
     */
    avatar_decoration_data?: AvatarDecorationData | null;
}