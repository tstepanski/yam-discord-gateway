import {KeywordPresetType} from "./keywordPresetType";
import {TriggerType} from "./triggerType";

/**
 *  Additional data used to determine whether a rule should be triggered. Different fields are relevant based on the
 *      value of {@link Rule#trigger_type trigger_type}.
 *
 *
 * ## Trigger Metadata Field Limits
 * | Field          | Trigger Types          | MAX ARRAY LENGTH  | MAX CHARACTERS PER STRING  |
 * | :------------- | :--------------------- | ----------------: | ------------------------: |
 * | keyword_filter | KEYWORD, MEMBER_PROFILE| 1000              | 60                        |
 * | regex_patterns | KEYWORD, MEMBER_PROFILE| 10                | 260                       |
 * | allow_list     | KEYWORD, MEMBER_PROFILE| 100               | 60                        |
 * | allow_list     | KEYWORD_PRESET         | 1000              | 80                        |
 *
 *
 * ## Keyword Matching Strategies
 * Use the wildcard symbol (`*`) at the beginning or end of a keyword to define how it should be matched. All keywords
 * are case-insensitive.
 *
 * **Prefix** - word must start with the keyword
 * | Keyword | Matches |
 * | :------ | :------------ |
 * | cat\\&#42; | **cat**ch, **Cat**apult, **CAt***tLE |
 * | tra\\&#42; | **tra**in, **tra**de, **TRA**ditional |
 * | the mat\\&#42; | **the mat**rix |
 *
 * **Suffix** - word must end with the keyword
 * | Keyword | Matches |
 * | :------ | :------------ |
 * | \\&#42;cat | wild**cat**, copy**Cat** |
 * | \\&#42;tra | ex**tra**, ul**tra**, orches**TRA** |
 * | \\&#42;the mat | brea**the mat** |
 *
 * **Anywhere** - keyword can appear anywhere in the content
 * | Keyword | Matches |
 * | :------ | :------------ |
 * | \\&#42;cat\\&#42; | lo**cat**ion, edu**Cat**ion |
 * | \\&#42;tra\\&#42; | abs**tra**cted, ou**tra**ge |
 * | \\&#42;the mat\\&#42; | brea**the mat**ter |
 *
 * **Whole Word** - keyword is a full word or phrase and must be surrounded by whitespace
 * | Keyword | Matches |
 * | :------ | :------------ |
 * | cat | **cat** | |
 * | train | **tra**in |
 * | the mat | **the mat** |
 *
 *
 * @see [Auto Moderation Trigger Metadata](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-trigger-metadata)
 *
 * @interface
 */
export interface TriggerMetadata {
	/**
	 * substrings which will be searched for in content (Maximum of 1000)
	 *
	 * A keyword can be a phrase which contains multiple words.
	 * [Wildcard symbols](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-matching-strategies)
	 * can be used to customize how each keyword will be matched. Each keyword must be 60 characters or fewer.
	 *
	 * Available for:
	 * * {@link TriggerType.Keyword}
	 * * {@link TriggerType.MemberProfile}
	 */
	keyword_filter: string[];

	/**
	 * regular expression patterns which will be matched against content (Maximum of 10)
	 *
	 * Only Rust flavored regex is currently supported, which can be tested in online editors such as
	 * [Rustexp](https://rustexp.lpil.uk/). Each regex pattern must be 260 characters or fewer.
	 *
	 * Available for:
	 * * {@link TriggerType.Keyword}
	 * * {@link TriggerType.MemberProfile}
	 */
	regex_patterns: string[];

	/**
	 * the internally pre-defined wordsets which will be searched for in content
	 *
	 * Available for {@link TriggerType.KeywordPreset}
	 */
	presets: KeywordPresetType[];

/**
	 * substrings which should not trigger the rule (Maximum of 100 or 1000)
	 *
	 * Each `allow_list` keyword can be a phrase which contains multiple words.
	 * [Wildcard symbols](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-keyword-matching-strategies)
	 * can be used to customize how each keyword will be matched. Rules with {@link TriggerType.Keyword} trigger_type
	 * accept a maximum of 100 keywords. Rules with {@link TriggerType.KeywordPreset} trigger_type accept a maximum of
	 * 1000 keywords.
	 *
	 * Available for:
	 * * {@link TriggerType.Keyword}
	 * * {@link TriggerType.KeywordPreset}
	 * * {@link TriggerType.MemberProfile}
	 */
	allow_list: string[];

	/**
	 * total number of unique role and user mentions allowed per message (Maximum of 50)
	 *
	 * Available for {@link TriggerType.MentionSpam}
	 */
	mention_total_limit: number;

	/**
	 * whether to automatically detect mention raids
	 *
	 * Available for {@link TriggerType.MentionSpam}
	 */
	mention_raid_protection_enabled: boolean;
}