import {Snowflake} from "../general";
import {EntitlementType} from "./entitlementType";

/**
 * Entitlements in Discord represent that a user or guild has access to a premium offering in your application.
 *
 * @remarks Refer to the [Monetization Overview](https://discord.com/developers/docs/monetization/overview) for more
 * information on how to use Entitlements in your app.
 *
 * @see [Entitlement Object](https://discord.com/developers/docs/resources/entitlement#entitlement-object)
 *
 * @interface
 */
export interface Entitlement {
	/**
	 * ID of the entitlement
	 */
	id: Snowflake;

	/**
	 * ID of the SKU
	 */
	sku_id: Snowflake;

	/**
	 * ID of the parent application
	 */
	application_id: Snowflake;

	/**
	 * ID of the user that is granted access to the entitlement's sku
	 */
	user_id?: Snowflake;

	/**
	 * Type of entitlement
	 */
	type: EntitlementType;

	/**
	 * Entitlement was deleted
	 */
	deleted: boolean;

	/**
	 * Start date at which the entitlement is valid.
	 */
	starts_at: string | null;  // TODO: setup datetime parsing

	/**
	 * Date at which the entitlement is no longer valid.
	 */
	ends_at: string | null;  // TODO: setup datetime parsing

	/**
	 * ID of the guild that is granted access to the entitlement's sku
	 */
	guild_id?: Snowflake;

	/**
	 * For consumable items, whether or not the entitlement has been consumed
	 */
	consumed?: boolean;
}