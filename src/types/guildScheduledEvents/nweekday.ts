import {Weekday} from "./weekday";

/**
 * Guild Scheduled Event Recurrency Rule - NWeekday
 *
 * @see [Guild Scheduled Event Recurrency Rule - N_Weekday Structure](@see [Guild Scheduled Event Recurrency Rule - N_Weekday Structure](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object-guild-scheduled-event-recurrence-rule-frequency))
 *
 * @interface
 */
export interface NWeekday {
	/**
	 * The week to reoccur on. 1 - 5
	 */
	n: number;

	/**
	 * The day within the week to reoccur on
	 */
	day: Weekday;
}