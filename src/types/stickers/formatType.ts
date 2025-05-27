/**
 * Sticker Format Types
 *
 * @see [Sticker Format Types](https://discord.com/developers/docs/resources/sticker#sticker-object-sticker-format-types)
 *
 * @enum
 */
export enum FormatType {
	/**
	 * Portable Network Graphics (PNG)
	 *
	 * @see [PNG (Wikipedia)](https://en.wikipedia.org/wiki/PNG)
	 */
	PNG = 1,

	/**
	 * Portable Network Graphics (PNG) - with transparency (alpha)
	 *
	 * @see [PNG - Transparency of image (Wikipedia)](https://en.wikipedia.org/wiki/PNG#Transparency_of_image)
	 */
	APNG = 2,

	/**
	 * Lottie
	 *
	 * @see [Lottie (Wikipedia)](https://en.wikipedia.org/wiki/Lottie_(file_format))
	 * @see [Lottie (Github)](https://lottie.github.io/)
	 */
	LOTTIE = 3,

	/**
	 * Graphics Interchange Format (GIF)
	 *
	 * @see [GIF (Wikipedia)](https://en.wikipedia.org/wiki/GIF)
	 */
	GIF = 4
}