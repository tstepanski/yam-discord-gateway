// TODO: Handle exceptions detailed here: https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-exceptions

/**
 * Many audit log events include a `changes` array in their {@link AuditLogEntry}. The
 * [structure for the individual changes](https://discord.com/developers/docs/resources/audit-log#audit-log-change-object-audit-log-change-structure)
 * varies based on the event type and its changed objects, so apps shouldn't depend on a single pattern of handling
 * audit log events.
 *
 * @remarks If `new_value` is not present in the change object while `old_value` is, it indicates that the property has
 * been reset or set to `null`. If `old_value` isn't included, it indicated that the property was previously `null`.
 * <hr />
 * Some events don't follow the same pattern as other audit log events.
 *
 * @see [Audit Log Change Object](https://discord.com/developers/docs/resources/audit-log#audit-log-change-object)
 *
 * @interface
 */
export interface Change<T> {
	/**
	 * New value of the key
	 */
	new_value?: T | null;

	/**
	 * Old value of the key
	 */
	old_value?: T | null;

	/**
	 * Name of the changed entity, with a few exceptions
	 */
	key: string;
}