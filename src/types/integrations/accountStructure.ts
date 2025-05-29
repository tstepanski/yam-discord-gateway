/**
 * Integration Account Object
 *
 * @see [Integration Account Structure](https://discord.com/developers/docs/resources/guild#integration-account-object-integration-account-structure)
 *
 * @interface
 */
export interface AccountStructure {
    /**
     * id of the account
     */
    id: string;

    /**
     * name of the account
     */
    name: string;
}