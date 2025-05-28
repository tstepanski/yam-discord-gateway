/**
 * Guild Member Flags
 *
 * @see [Guild Member Flags](https://discord.com/developers/docs/resources/guild#guild-member-object-guild-member-flags)
 *
 * @enum
 */
export enum GuildMemberFlags {
    /**
     * Member has left and rejoined the guild
     * @remarks Editable: FALSE
     **/

    DID_REJOIN = 1 << 0,

    /**
     * Member has completed onboarding
     * @remarks Editable: FALSE
     **/
    COMPLETED_ONBOARDING = 1 << 1,

    /**
     * Member is exempt from guild verification requirements
     * @remarks
     * Editable: TRUE
     * <br>
     * Allows a member who does not meet verification requirements to participate in a server
     **/
    BYPASSES_VERIFICATION = 1 << 2,

    /**
     * Member has started onboarding
     * @remarks Editable: FALSE
     **/
    STARTED_ONBOARDING = 1 << 3,

    /**
     * Member is a guest and can only access the voice channel they were invited to
     * @remarks Editable: FALSE
     **/
    IS_GUEST = 1 << 4,

    /**
     * Member has started Server Guide new member actions
     * @remarks Editable: FALSE
     **/
    STARTED_HOME_ACTIONS = 1 << 5,

    /**
     * Member has completed Server Guide new member actions
     * @remarks Editable: FALSE
     **/
    COMPLETED_HOME_ACTIONS = 1 << 6,

    /**
     * Member's username, display name, or nickname is blocked by AutoMod
     * @remarks Editable: FALSE
     **/
    AUTOMOD_QUARANTINED_USERNAME = 1 << 7,

    /**
     * Member has dismissed the DM settings upsell
     * @remarks Editable: FALSE
     **/
    DM_SETTINGS_UPSELL_ACKNOWLEDGED = 1 << 9,
}