/**
 * These are a list of all the OAuth2 scopes that Discord supports. Some scopes require approval from Discord to use.
 * Requesting them from a user without approval from Discord may cause errors or undocumented behavior in the OAuth2
 * flow.
 *
 * @remarks In order to add a user to a guild, your bot has to already belong to that guild. `role_connections.write`
 * cannot be used with the Implicit grant type.
 *
 * @see [OAuth2 Scopes](https://discord.com/developers/docs/topics/oauth2#shared-resources-oauth2-scopes)
 *
 * @enum
 */
export enum Scopes {
	/**
	 * allows your app to fetch data from a user's "Now Playing/Recently Played" list — not currently available for apps
	 */
	ActivitiesRead = "activities.read",

	/**
	 * allows your app to update a user's activity - not currently available for apps (NOT REQUIRED FOR
	 * [GAMESDK ACTIVITY MANAGER](https://discord.com/developers/docs/developer-tools/game-sdk#activities))
	 */
	ActivitiesWrite = "activities.write",

	/**
	 * allows your app to read build data for a user's applications
	 */
	ApplicationsBuildsRead = "applications.builds.read",

	/**
	 * allows your app to upload/update builds for a user's applications - requires Discord approval
	 */
	ApplicationsBuildsUpload = "applications.builds.upload",

	/**
	 * allows your app to add [commands](https://discord.com/developers/docs/interactions/application-commands) to a
	 * guild - included by default with the `bot` scope
	 */
	ApplicationsCommands = "applications.commands",

	/**
	 * allows your app to update its [commands](https://discord.com/developers/docs/interactions/application-commands)
	 * using a Bearer token -
	 * [client credentials grant](https://discord.com/developers/docs/topics/oauth2#client-credentials-grant) only
	 */
	ApplicationsCommandsUpdate = "applications.commands.update",

	/**
	 * allows your app to update permissions for its commands in a guild a user has permissions to
	 */
	ApplicationsCommandsPermissionsUpdate = "applications.commands.permissions.update",

	/**
	 * allows your app to read entitlements for a user's applications
	 */
	ApplicationsEntitlements = "applications.entitlements",

	/**
	 * allows your app to read and update store data (SKUs, store listings, achievements, etc.) for a user's
	 * applications
	 */
	ApplicationsStoreUpdate = "applications.store.update",

	/**
	 * for oauth2 bots, this puts the bot in the user's selected guild by default
	 */
	Bot = "bot",

	/**
	 * allows
	 * [`/users/@me/connections`](https://discord.com/developers/docs/resources/user#get-current-user-connections) to
	 * return linked third-party accounts
	 */
	Connections = "connections",

	/**
	 * allows your app to see information about the user's DMs and group DMs - requires Discord approval
	 */
	DMChannelsRead = "dm_channels.read",

	/**
	 * enables [`/users/@me`](https://discord.com/developers/docs/resources/user#get-current-user) to return an `email`
	 */
	Email = "email",

	/**
	 * allows your app to
	 * [join users to a group dm](https://discord.com/developers/docs/resources/channel#group-dm-add-recipient)
	 */
	GDMJoin = "gdm.join",

	/**
	 * allows [`/users/@me/guilds`](https://discord.com/developers/docs/resources/user#get-current-user-guilds) to
	 * return basic information about all of a user's guilds
	 */
	Guilds = "guilds",

	/**
	 * allows
	 * [`/guilds/{guild.id}/members/{user.id}`](https://discord.com/developers/docs/resources/guild#add-guild-member) to
	 * be used for joining users to a guild
	 */
	GuildsJoin = "guilds.join",

	/**
	 * allows
	 * [`/users/@me/guilds/{guild.id}/member`](https://discord.com/developers/docs/resources/user#get-current-user-guild-member)
	 * to return a user's member information in a guild
	 */
	GuildsMembersRead = "guilds.members.read",

	/**
	 * allows [`/users/@me`](https://discord.com/developers/docs/resources/user#get-current-user) without `email`
	 */
	Identify = "identify",

	/**
	 * for local rpc server api access, this allows you to read messages from all client channels (otherwise restricted
	 * to channels/guilds your app creates)
	 */
	MessagesRead = "messages.read",

	/**
	 * allows your app to know a user's friends and implicit relationships - requires Discord approval
	 */
	RelationshipsRead = "relationships.read",

	/**
	 * allows your app to update a user's connection and metadata for the app
	 */
	RoleConnectionsWrite = "role_connections.write",

	/**
	 * for local rpc server access, this allows you to control a user's local Discord client - requires Discord approval
	 */
	RPC = "rpc",

	/**
	 * for local rpc server access, this allows you to update a user's activity - requires Discord approval
	 */
	RPCActivitiesWrite = "rpc.activities.write",

	/**
	 * for local rpc server access, this allows you to receive notifications pushed out to the user - requires Discord
	 * approval
	 */
	RPCNotificationsRead = "rpc.notifications.read",

	/**
	 * for local rpc server access, this allows you to read a user's voice settings and listen for voice events -
	 * requires Discord approval
	 */
	RPCVoiceRead = "rpc.voice.read",

	/**
	 * for local rpc server access, this allows you to update a user's voice settings - requires Discord approval
	 */
	RPCVoiceWrite = "rpc.voice.write",

	/**
	 * allows your app to connect to voice on user's behalf and see all the voice members - requires Discord approval
	 */
	Voice = "voice",

	/**
	 * this generates a webhook that is returned in the oauth token response for authorization code grants
	 */
	WebhookIncoming = "webhook.incoming"
}