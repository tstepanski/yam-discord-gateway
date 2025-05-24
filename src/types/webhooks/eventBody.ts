import {EventTypeMap, TEvent} from "./eventTypeMap";

/**
 * The event body contains high-level data about the event, like the type and time it was triggered.
 *
 * The inner `data` object contains information specific to the {@link EventType event type}.
 *
 * @see [Event Body Object](https://discord.com/developers/docs/events/webhook-events#event-body-object)
 *
 * @interface
 */
export interface EventBody<T extends TEvent> {
	type: T;

	timestamp: string | Date; // TODO: setup date parsing

	data?: EventTypeMap[T];
}