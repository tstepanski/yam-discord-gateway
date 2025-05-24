import {ApplicationFlag} from "./applicationFlag";
import {Snowflake} from "../general";
import {User} from "../users";
import {Team} from "../teams";
import {Guild} from "../guilds";
import {EventWebhookStatus} from "./eventWebhookStatus";
import {InstallParams} from "./installParams";
import {IntegrationType} from "./integrationType";
import {IntegrationTypeConfiguration} from "./integrationTypeConfiguration";
import {EventType} from "../webhooks";

/**
 * [Applications](https://discord.com/developers/docs/quick-start/overview-of-apps) (or "apps") are containers for
 * developer platform features, and can be installed to Discord servers and/or user accounts.
 *
 * @see [Application](https://discord.com/developers/docs/resources/application#application-object-application-structure)
 *
 * @example
 * {
 *   "bot_public": true,
 *   "bot_require_code_grant": false,
 *   "cover_image": "31deabb7e45b6c8ecfef77d2f99c81a5",
 *   "description": "Test",
 *   "guild_id": "290926798626357260",
 *   "icon": null,
 *   "id": "172150183260323840",
 *   "integration_types_config": {
 *     "0": {
 *       "oauth2_install_params": {
 *         "scopes": [
 *           "applications.commands",
 *           "bot"
 *         ],
 *         "permissions": "2048"
 *       }
 *     },
 *     "1": {
 *       "oauth2_install_params": {
 *         "scopes": [
 *           "applications.commands"
 *         ],
 *         "permissions": "0"
 *       }
 *     }
 *   },
 *   "name": "Baba O-Riley",
 *   "interactions_endpoint_url": null,
 *   "role_connections_verification_url": null,
 *   "event_webhooks_url": null,
 *   "event_webhooks_status": 1,
 *   "owner": {
 *     "avatar": null,
 *     "discriminator": "1738",
 *     "flags": 1024,
 *     "id": "172150183260323840",
 *     "username": "i own a bot"
 *   },
 *   "primary_sku_id": "172150183260323840",
 *   "slug": "test",
 *   "team": {
 *     "icon": "dd9b7dcfdf5351b9c3de0fe167bacbe1",
 *     "id": "531992624043786253",
 *     "members": [
 *       {
 *         "membership_state": 2,
 *         "permissions": ["*"],
 *         "team_id": "531992624043786253",
 *         "user": {
 *           "avatar": "d9e261cd35999608eb7e3de1fae3688b",
 *           "discriminator": "0001",
 *           "id": "511972282709709995",
 *           "username": "Mr Owner"
 *         }
 *       }
 *     ]
 *   },
 *   "verify_key": "1e0a356058d627ca38a5c8c9648818061d49e49bd9da9e3ab17d98ad4d6bg2u8"
 * }
 *
 * @interface
 */
export interface Application {
	/**
	 * ID of the app
	 */
	id: Snowflake;

	/**
	 * Name of the app
	 */
	name: string;

	/**
	 * [Icon hash](https://discord.com/developers/docs/reference#image-formatting) of the app
	 */
	icon: string | null;

	/**
	 * Description of the app
	 */
	description: string;

	/**
	 * List of RPC origin URLs, if RPC is enabled
	 */
	rpc_origins?: string[];

	/**
	 * When `false`, only the app owner can add the app to guilds
	 */
	bot_public: boolean;

	/**
	 * When `true`, the app's bot will only join upon completion of the full OAuth2 code grant flow
	 */
	bot_require_code_grant: boolean;

	/**
	 * Partial user object for the bot user associated with the app
	 */
	bot?: Partial<User>;

	/**
	 * URL of the app's Terms of Service
	 */
	terms_of_service_url?: string;

	/**
	 * URL of the app's Privacy Policy
	 */
	privacy_policy_url?: string;

	/**
	 * Partial user object for the owner of the app
	 */
	owner?: Partial<User>;

	/**
	 * Hex encoded key for verification in interactions and the GameSDK's
	 * [GetTicket](https://github.com/discord/discord-api-docs/blob/legacy-gamesdk/docs/game_sdk/Applications.md#getticket)
	 */
	verify_key: string;

	/**
	 * If the app belongs to a team, this will be a list of the members of that team
	 */
	team: Team | null;

	/**
	 * Guild associated with the app. For example, a developer support server.
	 */
	guild_id?: Snowflake;

	/**
	 * Partial object of the associated guild
	 */
	guild?: Partial<Guild>;

	/**
	 * If this app is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists
	 */
	primary_sku_id?: Snowflake;

	/**
	 * If this app is a game sold on Discord, this field will be the URL slug that links to the store page
	 */
	slug?: string;

	/**
	 * App's default rich presence invite
	 * [cover image hash](https://discord.com/developers/docs/reference#image-formatting)
	 */
	cover_image?: string;

	/**
	 * App's public {@link ApplicationFlag flags}
	 */
	flags?: ApplicationFlag;

	/**
	 * Approximate count of guilds the app has been added to
	 */
	approximate_guild_count?: number;

	/**
	 * Approximate count of users that have installed the app
	 */
	approximate_user_install_count?: number;

	/**
	 * Array of redirect URIs for the app
	 */
	redirect_uris?: string[];

	/**
	 * [Interactions endpoint URL](https://discord.com/developers/docs/interactions/receiving-and-responding#receiving-an-interaction)
	 * for the app
	 */
	interactions_endpoint_url?: string | null;

	/**
	 * Role connection verification URL for the app
	 */
	role_connections_verification_url?: string | null;

	/**
	 * [Event webhooks URL](https://discord.com/developers/docs/events/webhook-events#preparing-for-events) for the app
	 * to receive webhook events
	 */
	event_webhooks_url?: string | null;

	/**
	 * If webhook events are enabled for the app.
	 */
	event_webhooks_status: EventWebhookStatus;

	/**
	 * List of Webhook event types the app subscribes to
	 */
	event_webhooks_types?: EventType[];

	/**
	 * List of tags describing the content and functionality of the app. Max of 5 tags.
	 */
	tags?: string[];

	/**
	 * Settings for the app's default in-app authorization link, if enabled
	 */
	install_params?: InstallParams;

	/**
	 * Default scopes and permissions for each supported installation context. Keys are
	 * {@link IntegrationType application integration types}. Value for each key is an
	 * {@link IntegrationTypeConfiguration integration type configuration object}
	 */
	integration_types_config?: Record<IntegrationType, IntegrationTypeConfiguration>;

	/**
	 * Default custom authorization URL for the app, if enabled
	 */
	custom_install_url?: string;
}

