import {Channel, Overwrite} from "../channels";
import {Event} from "./event";
import {Guild, GuildMember} from "../guilds";
import {Role} from "../permissions";
import {StageInstance} from "../stageInstances";
import {GuildScheduledEvent} from "../guildScheduledEvents";
import {Permission} from "../applicationCommands";
import {SoundboardSound} from "../soundboard";
import {Rule} from "../automoderation";
import {Sticker} from "../stickers";

export interface EventObjectChangeMap {
    [Event.GUILD_UPDATE]: Guild;

    [Event.CHANNEL_CREATE]: Channel;

    [Event.CHANNEL_UPDATE]: Channel;

    [Event.CHANNEL_DELETE]: Channel;

    [Event.CHANNEL_OVERWRITE_CREATE]: Overwrite;

    [Event.CHANNEL_OVERWRITE_UPDATE]: Overwrite;

    [Event.CHANNEL_OVERWRITE_DELETE]: Overwrite;

    [Event.MEMBER_KICK]: undefined;

    [Event.MEMBER_PRUNE]: undefined;

    [Event.MEMBER_BAN_ADD]: undefined;

    [Event.MEMBER_BAN_REMOVE]: undefined;

    [Event.MEMBER_UPDATE]: GuildMember;

    [Event.MEMBER_ROLE_UPDATE]: Partial<Role>;

    [Event.MEMBER_MOVE]: undefined;

    [Event.MEMBER_DISCONNECT]: undefined;

    [Event.BOT_ADD]: undefined;

    [Event.ROLE_CREATE]: Role;

    [Event.ROLE_UPDATE]: Role;

    [Event.ROLE_DELETE]: Role;

    [Event.INVITE_CREATE]: any; // TODO: Invite and Invite Metadata*;

    [Event.INVITE_UPDATE]: any; // TODO: Invite and Invite Metadata*;

    [Event.INVITE_DELETE]: any; // TODO: Invite and Invite Metadata*;

    [Event.WEBHOOK_CREATE]: any; // TODO: Webhook	*;

    [Event.WEBHOOK_UPDATE]: any; // TODO: Webhook	*;

    [Event.WEBHOOK_DELETE]: any; // TODO: Webhook	*;

    [Event.EMOJI_CREATE]: any; // Emoji;

    [Event.EMOJI_UPDATE]: any; //Emoji;

    [Event.EMOJI_DELETE]: any; //Emoji;

    [Event.MESSAGE_DELETE]: undefined;

    [Event.MESSAGE_BULK_DELETE]: undefined;

    [Event.MESSAGE_PIN]: undefined;

    [Event.MESSAGE_UNPIN]: undefined;

    [Event.INTEGRATION_CREATE]: any; // Integration;

    [Event.INTEGRATION_UPDATE]: any; //Integration;

    [Event.INTEGRATION_DELETE]: any; //Integration;

    [Event.STAGE_INSTANCE_CREATE]: StageInstance;

    [Event.STAGE_INSTANCE_UPDATE]: StageInstance;

    [Event.STAGE_INSTANCE_DELETE]: StageInstance;

    [Event.STICKER_CREATE]: Sticker;

    [Event.STICKER_UPDATE]: Sticker;

    [Event.STICKER_DELETE]: Sticker;

    [Event.GUILD_SCHEDULED_EVENT_CREATE]: GuildScheduledEvent;

    [Event.GUILD_SCHEDULED_EVENT_UPDATE]: GuildScheduledEvent;

    [Event.GUILD_SCHEDULED_EVENT_DELETE]: GuildScheduledEvent;

    [Event.THREAD_CREATE]: any; //Thread;

    [Event.THREAD_UPDATE]: any; //Thread;

    [Event.THREAD_DELETE]: any; // Thread;

    [Event.APPLICATION_COMMAND_PERMISSION_UPDATE]: Permission;

    [Event.SOUNDBOARD_SOUND_CREATE]: SoundboardSound;

    [Event.SOUNDBOARD_SOUND_UPDATE]: SoundboardSound;

    [Event.SOUNDBOARD_SOUND_DELETE]: SoundboardSound;

    [Event.AUTO_MODERATION_RULE_CREATE]: Rule<any>;

    [Event.AUTO_MODERATION_RULE_UPDATE]: Rule<any>;

    [Event.AUTO_MODERATION_RULE_DELETE]: Rule<any>;

    [Event.AUTO_MODERATION_BLOCK_MESSAGE]: undefined;

    [Event.AUTO_MODERATION_FLAG_TO_CHANNEL]: undefined;

    [Event.AUTO_MODERATION_USER_COMMUNICATION_DISABLED]: undefined;

    [Event.CREATOR_MONETIZATION_REQUEST_CREATED]: undefined;

    [Event.CREATOR_MONETIZATION_TERMS_ACCEPTED]: undefined;

    [Event.ONBOARDING_PROMPT_CREATE]: any; // TODO: Onboarding Prompt Structure;

    [Event.ONBOARDING_PROMPT_UPDATE]: any; // TODO: Onboarding Prompt Structure;

    [Event.ONBOARDING_PROMPT_DELETE]: any; // TODO: Onboarding Prompt Structure;

    [Event.ONBOARDING_CREATE]: any; // TODO: Guild Onboarding;

    [Event.ONBOARDING_UPDATE]: any; // TODO: Guild Onboarding;

    [Event.HOME_SETTINGS_CREATE]: undefined;

    [Event.HOME_SETTINGS_UPDATE]: undefined;
}