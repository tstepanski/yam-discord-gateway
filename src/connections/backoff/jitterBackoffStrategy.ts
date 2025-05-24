import {ExponentialBackoffStrategy} from "./exponentialBackoffStrategy";

export class JitterBackoffStrategy extends ExponentialBackoffStrategy {
	public constructor(baseDelay: number = 1000,
	                   maxDelay: number = 30000,
	                   private readonly jitterFactor: number = 0.5,
	                   maxAttempts?: number) {
		super(baseDelay, maxDelay, maxAttempts);
	}

	protected override getDelayInMilliseconds(): number {
		const expDelay = super.getDelayInMilliseconds();
		const jitter = expDelay * this.jitterFactor * Math.random();

		return  expDelay - jitter;
	}
}