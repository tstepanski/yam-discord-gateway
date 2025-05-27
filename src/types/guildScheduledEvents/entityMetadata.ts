/**
 * Guild Scheduled Event Entity Metadata
 *
 * @see [Guild Scheduled Event Entity Metadata](https://discord.com/developers/docs/resources/guild-scheduled-event#guild-scheduled-event-object-guild-scheduled-event-entity-metadata)
 *
 * @interface
 */
export interface EntityMetadata {
	/**
	 * location of the event (1-100 characters)
	 *
	 * @remarks required for events with `'entity_type': EXTERNAL`
	 */
	location?: string;
}