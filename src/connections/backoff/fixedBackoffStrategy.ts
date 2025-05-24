import {AbstractBackoffStrategy} from "./AbstractBackoffStrategy";

/**
 * Fixed delay between attempts
 */
export class FixedBackoffStrategy extends AbstractBackoffStrategy {
	public constructor(private readonly delayInMilliseconds: number,
	                   maximumAttempts?: number) {
		super(maximumAttempts);
	}

	protected override getDelayInMilliseconds(): number {
		return this.delayInMilliseconds;
	}
}