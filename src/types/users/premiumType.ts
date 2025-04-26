/**
 * Premium types denote the level of premium a user has. Visit the [Nitro](https://discord.com/nitro) page to learn more
 * about the premium plans currently offered.
 *
 * @see [Premium Types](https://discord.com/developers/docs/resources/user#user-object-premium-types)
 *
 * @enum
 */
export enum PremiumType {
	None = 0,

	/**
	 * https://support.discord.com/hc/en-us/articles/115000435108-What-are-Nitro-Nitro-Basic#h_01GFV3PWAGD4EGTD91ERBZ5R4S
	 */
	NitroClassic = 1,

	/**
	 * [Nitro](https://support.discord.com/hc/en-us/articles/115000435108-What-are-Nitro-Nitro-Basic#h_01GFV3P0M2YEC5GQA04QZZ3XTA)
	 */
	Nitro = 2,

	/**
	 * [Nitro Basic](https://support.discord.com/hc/en-us/articles/115000435108-What-are-Nitro-Nitro-Basic#h_01GFV3P6JCBPK991K73KW8C70B)
	 */
	NitroBasic = 3
}