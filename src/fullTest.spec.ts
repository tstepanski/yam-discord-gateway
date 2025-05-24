import {ConnectionBuilder} from "./index";
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

	it("should receive basic events", async () => {
		let resolve: Resolve;
		let reject: Reject;

		const assertion = new Promise<void>((innerResolve, innerReject) => {
			resolve = innerResolve;
			reject = innerReject;
		});

		const connection = ConnectionBuilder
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

		void connection.startAsync();

		await assertion;

		await connection.stopAsync();
	}, 5000);
});