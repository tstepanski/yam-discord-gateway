import {ConnectionBuilder, ConnectionContract} from "./index";
import {EventName} from "./types/payloads";

describe("FullTest", () => {
	let connection: ConnectionContract | undefined = undefined;

	function getEnvironmentVariable(name: string): string {
		const value = process.env[name];

		if (value) {
			return value.trim();
		}

		throw new Error(`Environment variable ${name} is not set`);
	}

	afterEach(async () => {
		if (connection) {
			await connection.stopAsync();
		}
	});

	it("should receive basic events", () => {
		return new Promise<void>((resolve, reject) => {
			connection = ConnectionBuilder
				.new({
					applicationId: getEnvironmentVariable("APPLICATION_ID"),
					discordToken: getEnvironmentVariable("DISCORD_TOKEN"),
					publicKey: getEnvironmentVariable("PUBLIC_KEY")
				})
				.addDispatchEventHandler(EventName.Ready, payload => {
					try {
						expect(payload.d?.user.id).toBeDefined();
						resolve();
					} catch (error: unknown) {
						reject(error);
					}

					return Promise.resolve();
				})
				.build();

			connection
				.startAsync()
				.catch(reject);
		});
	}, 5000);
});