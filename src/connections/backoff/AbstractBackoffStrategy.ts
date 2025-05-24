import {BackoffStrategy} from "./backoffStrategy";

export abstract class AbstractBackoffStrategy implements BackoffStrategy {
	protected attempt: number = 0;

	protected constructor(private readonly maximumAttempts?: number) {
	}

	protected abstract getDelayInMilliseconds(): number;

	public get cancelled(): boolean {
		return this.maximumAttempts !== undefined && this.attempt >= this.maximumAttempts;
	}

	public delayAsync(abortSignal: AbortSignal): Promise<void> {
		if (this.cancelled) {
			throw new Error("Maximum connect attempts reached");
		}

		abortSignal.throwIfAborted();

		this.attempt++;

		const delayInMilliseconds = this.getDelayInMilliseconds();

		return new Promise(resolve => setTimeout(resolve, delayInMilliseconds));
	}

	public reset(): void {
		this.attempt = 0;
	}
}