import {TriggerType} from "./triggerType";
import {TriggerMetadata} from "./triggerMetadata";

export interface TriggerTypeMetadata {
	[TriggerType.Keyword]: Pick<TriggerMetadata, "keyword_filter" | "regex_patterns" | "allow_list">;

	[TriggerType.MemberProfile]: Pick<TriggerMetadata, "keyword_filter" | "regex_patterns" | "allow_list">;

	[TriggerType.KeywordPreset]: Pick<TriggerMetadata, "presets" | "allow_list">;

	[TriggerType.MentionSpam]: Pick<TriggerMetadata, "mention_total_limit" | "mention_raid_protection_enabled">;

	[TriggerType.Spam]: Pick<TriggerMetadata, never>;
}