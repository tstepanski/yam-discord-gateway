export class FakeAbortSignal implements AbortSignal {
	public readonly aborted: boolean= false;
	public readonly onabort: ((this: AbortSignal, ev: Event) => any) | null = null;
	public readonly reason: any;

	public addEventListener(_: string, __: EventListenerOrEventListenerObject): void {
		// Do nothing
	}

	public removeEventListener(_: string, __: EventListenerOrEventListenerObject): void {
		// Do nothing
	}

	public dispatchEvent(_: Event): boolean {
		return false;
	}

	public throwIfAborted(): void {
		// never throws
	}
}
