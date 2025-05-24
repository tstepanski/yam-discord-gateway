import {AbstractBackoffStrategy} from "./AbstractBackoffStrategy";

export class NoReconnectBackoffStrategy extends AbstractBackoffStrategy {
	public constructor() {
		super(1);
	}

	protected getDelayInMilliseconds(): number {
		return 0;
	}
}