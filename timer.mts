export class Timer {
	private start: number;
	private elapsed: number;
	constructor() {
		this.elapsed = this.start = Bun.nanoseconds();
	}

	public lap(): number {
		return this.lapNanoseconds() / 1_000_000;
	}

	public lapNanoseconds(): number {
		const now = Bun.nanoseconds();
		const elapsed = now - this.elapsed;
		this.elapsed = now;
		return elapsed;
	}

	public total(): number {
		return this.totalNanoseconds() / 1_000_000;
	}

	public totalNanoseconds(): number {
		return Bun.nanoseconds() - this.start;
	}
}
