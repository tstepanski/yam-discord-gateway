import {ConnectionBuilder, ConnectionContract} from "./index";
import {EventName} from "./types/payloads";

type Resolve = (value: (void | PromiseLike<void>)) => void;
type Reject = (reason?: any) => void;

describe("FullTest", () => {
	let connection: ConnectionContract | undefined;

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

	it("should receive basic events", async () => {
		let resolve: Resolve;
		let reject: Reject;

		const assertion = new Promise<void>((innerResolve, innerReject) => {
			resolve = innerResolve;
			reject = innerReject;
		});

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
				} catch (error) {
					reject(error);
				}

				return Promise.resolve();
			})
			.build();

		await connection.startAsync();
		await assertion;
	}, 5000);
});