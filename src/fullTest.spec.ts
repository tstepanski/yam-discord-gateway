import {ConnectionBuilder, ConnectionContract} from "./index";
import {EventName} from "./types/payloads";

type Resolve = (value: (void | PromiseLike<void>)) => void;
type Reject = (reason?: any) => void;

describe("FullTest", () => {
	function getEnvironmentVariable(name: string): string {
		const value = process.env[name];

		if (value) {
			return value.trim();
		}

		throw new Error(`Environment variable ${name} is not set`);
	}

	async function createTest(
		builderSetup: (connectionBuilder: ConnectionBuilder, resolve: Resolve, reject: Reject) => ConnectionBuilder):
		Promise<void> {
		let connection: ConnectionContract | undefined;

		try {
			await new Promise<void>(async (resolve, reject) => {
				let connectionBuilder = ConnectionBuilder.new({
					applicationId: getEnvironmentVariable("APPLICATION_ID"),
					discordToken: getEnvironmentVariable("DISCORD_TOKEN"),
					publicKey: getEnvironmentVariable("PUBLIC_KEY")
				});

				connectionBuilder = builderSetup(connectionBuilder, resolve, reject);

				connection = connectionBuilder.build();

				await connection.startAsync();
			});
		} finally {
			if (connection) {
				await connection.stopAsync();
			}
		}
	}

	it("should receive basic events", () => {
		return createTest((connectionBuilder, resolve, reject) =>
			connectionBuilder.addDispatchEventHandler(EventName.Ready, payload => {
				try {
					expect(payload.d?.user.id).toBeDefined();
					resolve();
				} catch (error: unknown) {
					reject(error);
				}

				return Promise.resolve();
			}));
	}, 5000);
});