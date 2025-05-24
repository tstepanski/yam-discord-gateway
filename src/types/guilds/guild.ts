import {Snowflake} from "../general";
import {VerificationLevel} from "./verificationLevel";
import {DefaultMessageNotificationLevel} from "./defaultMessageNotificationLevel";
import {ExplicitContentFilterLevel} from "./explicitContentFilterLevel";
import {Role} from "../permissions";

/**
 * Guilds in Discord represent an isolated collection of users and channels, and are often referred to as "servers" in
 * the UI.
 *
 * @see [Guild Object](https://discord.com/developers/docs/resources/guild#guild-object)
 *
 * @interface
 */
export interface Guild {
	id: Snowflake;

	name: string;

	icon?: string | null;

	icon_hash?: string | null;

	splash?: string | null;

	discovery_splash?: string | null;

	owner?: boolean;

	owner_id: Snowflake;

	permissions?: string;

	region?: string | null;

	afk_channel_id: Snowflake | null;

	afk_timeout: number;

	widget_enabled?: boolean;

	widget_channel_id?: Snowflake | null;

	verification_level: VerificationLevel;

	default_message_notifications: DefaultMessageNotificationLevel;

	explicit_content_filter: ExplicitContentFilterLevel;

	roles: Role[];
}