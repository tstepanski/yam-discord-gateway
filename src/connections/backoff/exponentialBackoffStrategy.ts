import {AbstractBackoffStrategy} from "./AbstractBackoffStrategy";

/**
 * Exponentially increasing delay up to a maximum
 */
export class ExponentialBackoffStrategy extends AbstractBackoffStrategy {
	public constructor(private readonly baseDelay: number = 1000,
	                   private readonly maximumDelay: number = 30000,
	                   maximumAttempts?: number) {
		super(maximumAttempts);
	}

	protected override getDelayInMilliseconds(): number {
		return Math.min(this.baseDelay * 2 ** this.attempt, this.maximumDelay);
	}
}