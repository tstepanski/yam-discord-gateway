export class UnknownEventCodeError extends Error {
	public constructor(public readonly codeValue: number) {
		super(`Unknown event code ${codeValue}`);
	}
}