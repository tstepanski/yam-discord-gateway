import {Locale, Snowflake} from "../general";
import {Flag} from "./flag";
import {PremiumType} from "./premiumType";
import {AvatarDecorationData} from "./avatarDecorationData";

/**
 * Users in Discord are generally considered the base entity. Users can spawn across the entire platform, be members of
 * guilds, participate in text and voice chat, and much more. Users are separated by a distinction of "bot" vs "normal."
 * Although they are similar, bot users are automated users that are "owned" by another user. Unlike normal users, bot
 * users do not have a limitation on the number of Guilds they can be a part of.
 *
 * @see [User](https://discord.com/developers/docs/resources/user#user-object-user-structure)
 *
 * @interface
 *
 * @remarks Discord enforces the following restrictions for usernames and nicknames:
 * * Names can contain most valid Unicode characters. We limit some zero-width and non-rendering characters.
 * * Usernames must be between 2 and 32 characters long.
 * * Nicknames must be between 1 and 32 characters long.
 * * Names are sanitized and trimmed of leading, trailing, and excessive internal whitespace.
 *
 * The following restrictions are additionally enforced for usernames:
 * * Usernames cannot contain the following substrings: `@`, `#`, `:`, `discord`
 * * Usernames cannot be: `everyone`, `here`
 *
 * There are other rules and restrictions not shared here for the sake of spam and abuse mitigation, but the majority of
 * users won't encounter them. It's important to properly handle all error messages returned by Discord when editing or
 * updating names.
 */
export interface User {
	/**
	 * the user's id
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	id: Snowflake;

	/**
	 * the user's username, not unique across the platform
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	username: string;

	/**
	 * the user's Discord-tag
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	discriminator: string;

	/**
	 * the user's display name, if it is set. For bots, this is the application name
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	global_name?: string | null;

	/**
	 * the user's [avatar hash](https://discord.com/developers/docs/reference#image-formatting)
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	avatar?: string | null;

	/**
	 * whether the user belongs to an OAuth2 application
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	bot?: boolean;

	/**
	 * whether the user is an Official Discord System user (part of the urgent message system)
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	system?: boolean;

	/**
	 * whether the user has two factor enabled on their account
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	mfa_enabled?: boolean;

	/**
	 * the user's [banner hash](https://discord.com/developers/docs/reference#image-formatting)
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	banner?: string | null;

	/**
	 * the user's banner color encoded as an integer representation of hexadecimal color code
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	accent_color?: number | null;

	/**
	 * the user's chosen language option
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	locale?: Locale;

	/**
	 * whether the email on this account has been verified
	 *
	 * @remarks requires email OAuth2 Scope
	 */
	verified?: boolean;

	/**
	 * the user's email
	 *
	 * @remarks requires email OAuth2 Scope
	 */
	email?: string | null;

	/**
	 * the {@link Flag flags} on a user's account
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	flags?: Flag;

	/**
	 * the {@link PremiumType type of Nitro subscription} on a user's account
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	premium_type?: PremiumType;

	/**
	 * the public {@link Flag flags} on a user's account
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	public_flags?: number;

	/**
	 * data for the user's avatar decoration
	 *
	 * @remarks requires identify OAuth2 Scope
	 */
	avatar_decoration_data?: AvatarDecorationData | null;
}