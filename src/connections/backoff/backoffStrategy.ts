export interface BackoffStrategy {
	delayAsync(abortSignal: AbortSignal): Promise<void>;

	reset(): void;

	get cancelled(): boolean;
}