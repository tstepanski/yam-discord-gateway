import {ConnectionBuilder} from "./index";
import {EventName} from "./types/payloads";

type Resolve = (value: (void | PromiseLike<void>)) => void;

describe("FullTest", () => {
	function getEnvironmentVariable(name: string): string {
		const value = process.env[name];

		if (value) {
			return value.trim();
		}

		throw new Error(`Environment variable ${name} is not set`);
	}

	it("should receive basic events", async () => {
		let resolve: Resolve;
		let result: any;

		const assertion = new Promise<void>(innerResolve => resolve = innerResolve);

		const connection = ConnectionBuilder
			.new({
				applicationId: getEnvironmentVariable("APPLICATION_ID"),
				discordToken: getEnvironmentVariable("DISCORD_TOKEN"),
				publicKey: getEnvironmentVariable("PUBLIC_KEY")
			})
			.withNoReconnectStrategy()
			.addDispatchEventHandler(EventName.Ready, payload => {
				result = payload.d?.user.id;

				resolve();

				return Promise.resolve();
			})
			.build();

		void connection.startAsync();

		await assertion;

		await connection.stopAsync();

		expect(result).toBeDefined();
	}, 5000);
});