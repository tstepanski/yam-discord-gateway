import {Snowflake} from "../general";
import {ExpireBehavior} from "./expireBehavior";
import {User} from "../users";
import {Account} from "./account";
import {Application} from "./application";
import {Scopes} from "../oauth2";

/**
 * Guild Integration Object
 *
 * @see [Guild Integration Object](https://discord.com/developers/docs/resources/guild#integration-object
 *
 * @interface
 */
export interface Integration {
    /**
     * integration id
     */
    id: Snowflake;

    /**
     * integration name
     */
    name: string;

    /**
     * integration type (twitch, youtube, discord, or guild_subscription)
     */
    type: string;

    /**
     * is this integration enabled
     */
    enabled: boolean;

    /**
     * is this integration syncing
     *
     * @remarks not provided for discord bot integrations
     */
    syncing?: boolean;

    /**
     * id that this integration uses for "subscribers"
     *
     * @remarks not provided for discord bot integrations
     */
    role_id?: Snowflake;

    /**
     * whether emoticons should be synced for this integration
     *
     * @remarks
     * twitch only currently
     * <hr />
     * not provided for discord bot integrations
     */
    enable_emoticons?: boolean;

    /**
     * the behavior of expiring subscribers
     *
     * @remarks not provided for discord bot integrations
     */
    expire_behavior?: ExpireBehavior;

    /**
     * the grace period (in days) before expiring subscribers
     *
     * @remarks not provided for discord bot integrations
     */
    expire_grace_period?: number;

    /**
     * user for this integration
     *
     * @remarks Some older integrations may not have an attached user.
     */
    user?: User;

    /**
     * integration account information
     */
    account: Account;

    /**
     * when this integration was last synced
     *
     * @remarks not provided for discord bot integrations
     */
    synced_at?: string | Date; // TODO: setup date parsing

    /**
     * how many subscribers this integration has
     *
     * @remarks not provided for discord bot integrations
     */
    subscriber_count?: number;

    /**
     * has this integration been revoked
     *
     * @remarks not provided for discord bot integrations
     */
    revoked?: boolean;

    /**
     * The bot/OAuth2 application for discord integrations
     */
    application?: Application;

    /**
     * the scopes the application has been authorized for
     */
    scopes?: Scopes[];
}