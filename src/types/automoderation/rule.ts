import {Snowflake} from "../general";
import {Action} from "./action";
import {EventType} from "./eventType";
import {TriggerType} from "./triggerType";
import {TriggerTypeMetadata} from "./keywordTriggeredRule";

/**
 * Auto Moderation Rule Structure
 *
 * @example
 * {
 *   "id": "969707018069872670",
 *   "guild_id": "613425648685547541",
 *   "name": "Keyword Filter 1",
 *   "creator_id": "423457898095789043",
 *   "trigger_type": 1,
 *   "event_type": 1,
 *   "actions": [
 *     {
 *       "type": 1,
 *       "metadata": { "custom_message": "Please keep financial discussions limited to the #finance channel" }
 *     },
 *     {
 *       "type": 2,
 *       "metadata": { "channel_id": "123456789123456789" }
 *     },
 *     {
 *       "type": 3,
 *       "metadata": { "duration_seconds": 60 }
 *     }
 *   ],
 *   "trigger_metadata": {
 *     "keyword_filter": ["cat*", "*dog", "*ana*", "i like c++"],
 *     "regex_patterns": ["(b|c)at", "^(?:[0-9]{1,3}\\.){3}[0-9]{1,3}$"]
 *   },
 *   "enabled": true,
 *   "exempt_roles": ["323456789123456789", "423456789123456789"],
 *   "exempt_channels": ["523456789123456789"]
 * }
 *
 * @see [Auto Moderation Rule Structure](https://discord.com/developers/docs/resources/auto-moderation#auto-moderation-rule-object-auto-moderation-rule-structure)
 * @interface
 */
export interface Rule<T extends TriggerType> {
	/**
	 * the id of this rule
	 */
	id: Snowflake;

	/**
	 * the id of the guild which this rule belongs to
	 */
	guild_id: Snowflake;

	/**
	 * the rule name
	 */
	name: string;

	/**
	 * the user which first created this rule
	 */
	creator_id: Snowflake;

	/**
	 * the rule {@link EventType event type}
	 */
	event_type: EventType;

	/**
	 * the rule {@link TriggerType trigger type}
	 */
	trigger_type: T;

	/**
	 * the rule {@link TriggerMetadata trigger metadata}
	 */
	trigger_metadata: TriggerTypeMetadata[T];

	/**
	 * the {@link Action actions} which will execute when the rule is triggered
	 */
	actions: Action<T, any>[];

	/**
	 * whether the rule is enabled
	 */
	enabled: boolean;

	/**
	 * the role ids that should not be affected by the rule (Maximum of 20)
	 */
	exempt_roles: Snowflake[];

	/**
	 * the channel ids that should not be affected by the rule (Maximum of 50)
	 */
	exempt_channels: Snowflake[];
}
