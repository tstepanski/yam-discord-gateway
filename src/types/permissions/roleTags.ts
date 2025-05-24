import {Snowflake} from "../general";

/**
 * Tags with type null represent booleans. They will be present and set to null if they are "true", and will be not
 * present if they are "false".
 *
 * @see [Role Tags Structure](https://discord.com/developers/docs/topics/permissions#role-object-role-tags-structure)
 *
 * @interface
 */
export interface RoleTags {
	/**
	 * the id of the bot this role belongs to
	 */
	bot_id?: Snowflake;

	/**
	 * the id of the integration this role belongs to
	 */
	integration_id?: Snowflake;

	/**
	 * whether this is the guild's Booster role
	 */
	premium_subscriber?: null;

	/**
	 * the id of this role's subscription sku and listing
	 */
	subscription_listing_id?: Snowflake;

	/**
	 * whether this role is available for purchase
	 */
	available_for_purchase?: null;

	/**
	 * whether this role is a guild's linked role
	 */
	guild_connections?: null;
}