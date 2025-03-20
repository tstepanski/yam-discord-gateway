export class Timespan {
	private static readonly MILLISECONDS_PER_SECOND = 1000;
	private static readonly MILLISECONDS_PER_MINUTE = Timespan.MILLISECONDS_PER_SECOND * 60;
	private static readonly MILLISECONDS_PER_HOUR = Timespan.MILLISECONDS_PER_MINUTE * 60;
	private static readonly MILLISECONDS_PER_DAY = Timespan.MILLISECONDS_PER_HOUR * 24;

	private readonly _totalMilliseconds: number;

	public constructor(totalMilliseconds: number) {
		this._totalMilliseconds = totalMilliseconds;
	}

	public get totalMilliseconds(): number {
		return this._totalMilliseconds;
	}

	public get totalSeconds(): number {
		return this._totalMilliseconds / Timespan.MILLISECONDS_PER_SECOND;
	}

	public get totalMinutes(): number {
		return this._totalMilliseconds / Timespan.MILLISECONDS_PER_MINUTE;
	}

	public get totalHours(): number {
		return this._totalMilliseconds / Timespan.MILLISECONDS_PER_HOUR;
	}

	public get totalDays(): number {
		return this._totalMilliseconds / Timespan.MILLISECONDS_PER_DAY;
	}

	public static fromMilliseconds(totalMilliseconds: number): Timespan {
		return new Timespan(totalMilliseconds);
	}

	public static fromSeconds(totalSeconds: number): Timespan {
		return Timespan.fromMilliseconds(totalSeconds * Timespan.MILLISECONDS_PER_SECOND);
	}

	public static fromMinutes(totalMinutes: number): Timespan {
		return Timespan.fromMilliseconds(totalMinutes * Timespan.MILLISECONDS_PER_MINUTE);
	}

	public static fromHours(totalHours: number): Timespan {
		return Timespan.fromMilliseconds(totalHours * Timespan.MILLISECONDS_PER_HOUR);
	}

	public static fromDays(totalDays: number): Timespan {
		return Timespan.fromMilliseconds(totalDays * Timespan.MILLISECONDS_PER_DAY);
	}

	public toString(): string {
		let millisecondsRemaining = this.totalMilliseconds;

		const days = Math.floor(millisecondsRemaining / Timespan.MILLISECONDS_PER_DAY);

		millisecondsRemaining %= Timespan.MILLISECONDS_PER_DAY;

		const hours = Math.floor(millisecondsRemaining / Timespan.MILLISECONDS_PER_HOUR);

		millisecondsRemaining %= Timespan.MILLISECONDS_PER_HOUR;

		const minutes = Math.floor(millisecondsRemaining / Timespan.MILLISECONDS_PER_MINUTE);

		millisecondsRemaining %= Timespan.MILLISECONDS_PER_MINUTE;

		const seconds = Math.floor(millisecondsRemaining / Timespan.MILLISECONDS_PER_SECOND);

		millisecondsRemaining %= Timespan.MILLISECONDS_PER_SECOND;

		return `${days}:${hours}:${minutes}:${seconds}.${millisecondsRemaining}`;
	}
}