import {Frequency} from "./frequency";
import {Weekday} from "./weekday";
import {NWeekday} from "./nweekday";
import {Month} from "./month";

/**
 * Discord's recurrence rule is a subset of the behaviors
 * [defined in the iCalendar RFC](https://datatracker.ietf.org/doc/html/rfc5545) and implemented by
 * [python's dateutil rrule](https://dateutil.readthedocs.io/en/stable/rrule.html)
 *
 * @remarks
 * The current system limitations are present due to how reoccurring event data needs to be displayed in the client. In
 * the future, we would like to open the system up to have fewer / none of these restrictions.
 *
 * <hr />
 *
 * <b>The following fields cannot be set by the client / application</b>
 * <ul>
 *     <li>`count`</li>
 *     <li>`end`</li>
 *     <li>`by_year_day`</li>
 * </ul>
 *
 * <b>The following combinations are mutually exclusive</b>
 * <ul>
 *     <li>`by_weekday`</li>
 *     <li>`by_n_weekday`</li>
 *     <li>`by_month + by_month_day`</li>
 * </ul>
 *
 * <hr />
 *
 * <b>`by_weekday`</b>
 * <ul>
 *     <li>Only valid for daily and weekly events (`frequency` of `DAILY` (`0`) or `WEEKLY` (`1`))</li>
 *     <li>
 *         when used in a daily event (`frequency` is `DAILY` (`0`))
 *         <ul>
 *             <li>The values present in the `by_weekday` event must be a "known set" of weekdays.</li>
 *             <li>
 *                 The following are current allowed "sets"
 *                 <ul>
 *                     <li>Monday - Friday (`[0, 1, 2, 3, 4]`)</li>
 *                     <li>Tuesday - Saturday (`[1, 2, 3, 4, 5]`)</li>
 *                     <li>Sunday - Thursday (`[6, 0, 1, 2, 3]`)</li>
 *                     <li>Friday & Saturday (`[4, 5]`)</li>
 *                     <li>Saturday & Sunday (`[5, 6]`)</li>
 *                     <li>Sunday & Monday (`[6, 0]`)</li>
 *                </ul>
 *            </li>
 *        </ul>
 *     <li>
 *         when used in a weekly event (`frequency` is `WEEKLY` (`1`))
 *         <ul>
 *             <li>
 *                 <ul>
 *                     <li>i.e: You can only select a single day within a week to have a recurring event on</li>
 *                     <li>
 *                         If you wish to have multiple days within a week have a recurring event, please use a
 *                         `frequency` of `DAILY`
 *                     </li>
 *                 </ul>
 *             </li>
 *             <li>Also, see `interval` below for "every-other" week information</li>
 *         </ul>
 *     </li>
 * </ul>
 *
 * <hr />
 *
 * <b>`by_n_weekday`</b>
 * <ul>
 *     <li>Only valid for monthly events (`frequency` of `MONTHLY` (`1`))</li>
 *     <li>
 *         `by_n_weekday` array currently can only be a length of `1`
 *         <ul>
 *             <li>i.e: You can only select a single day within a month to have a recurring event on</li>
 *         </ul>
 *     </li>
 * </ul>
 *
 * <hr />
 *
 * <b>`by_month` and `by_month_day`</b>
 * <ul>
 *     <li>Only valid for annual event (`frequency` is `YEARLY` (`0`))</li>
 *     <li>both `by_month` and `by_month_day` must be provided</li>
 *     <li>
 *         both `by_month` and `by_month_day` arrays must have a length of `1`
 *         <ul>
 *             <li>(i.e: You can only set a single date for annual events)</li>
 *         </ul>
 *     </li>
 * </ul>
 *
 * <hr />
 *
 * <b>`interval` can only be set to a value other than `1` when `frequency` is set to `WEEKLY` (`1`)</b>
 * <ul>
 *     <li>In this situation, `interval` can be set to `2`</li>
 *     <li>This allowance enables "every-other week" events</li>
 *     <li>
 *         Due to the limitations placed on `by_weekday` this means that if you wish to use "every-other week"
 *         functionality you can only do so for a single day.
 *     </li>
 * </ul>
 *
 * @see [Guild Scheduled Event Recurrence Rule Structure](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-recurrence-rule-object)
 *
 * @example
 * // Every weekday
 * frequency = 3; // Frequency.DAILY
 * interval = 1;
 * by_weekday = [0, 1, 2, 3, 4]; // [Weekday.MONDAY, ..., Weekday.FRIDAY]
 *
 * // Every Wednesday
 * frequency = 2; // Frequency.WEEKLY
 * interval = 1;
 * by_weekday = [2]; // [Weekday.WEDNESDAY]
 *
 * // Every other Wednesday
 * frequency = 2; // Frequency.WEEKLY
 * interval = 2;
 * by_weekday = [2]; // [Weekday.WEDNESDAY]
 *
 * // Monthly on the fourth Wednesday
 * frequency = 1; // Frequency.MONTHLY
 * interval = 1;
 * by_n_weekday = [{
 *   n: 4,
 *   day: 2 // Weekday.WEDNESDAY
 * }];
 *
 * // Annually on July 24
 * frequency = 0; // Frequency.YEARLY
 * interval = 1;
 * by_month = [7]; // [Month.JULY]
 * by_month_day = [24];
 *
 * @interface
 */
export interface RecurrenceRule {
	/**
	 * Starting time of the recurrence interval
	 */
	start: string | Date; // TODO: setup date parsing

	/**
	 * Ending time of the recurrence interval
	 *
	 * @remarks Cannot be set externally currently
	 */
	end: string | Date | null;

	/**
	 * How often the event occurs
	 */
	frequency: Frequency;

	/**
	 * The spacing between the events, defined by frequency
	 *
	 * @example
	 * // Every-other week
	 * {
	 *     "frequency": 2 // Frequency.WEEKLY
	 *     "interval": 2
	 * }
	 */
	interval: number;

	/**
	 * Set of specific days within a week for the event to recur on
	 */
	by_weekday: Weekday[] | null;

	/**
	 * List of specific days within a specific week (1-5) to recur on
	 */
	by_n_weekday: NWeekday | null;

	/**
	 * Set of specific months to recur on
	 */
	by_month: Month | null;

	/**
	 * Set of specific dates within a month to recur on
	 */
	by_month_day: number[] | null;

	/**
	 * Set of days within a year to recur on (1-364)
	 *
	 * @remarks Cannot be set externally currently
	 */
	by_year_day: number[] | null;

	/**
	 * The total amount of times that the event is allowed to recur before stopping
	 *
	 * @remarks Cannot be set externally currently
	 */
	count: number | null;
}