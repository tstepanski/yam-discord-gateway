import {ConnectionBuilder} from "./index";
import {EventName} from "./types/payloads";

describe("FullTest", () => {
	function getEnvironmentVariable(name: string): string {
		const value = process.env[name];

		if (value) {
			return value.trim();
		}

		throw new Error(`Environment variable ${name} is not set`);
	}

	it("should receive basic events", done => {
		ConnectionBuilder
			.new({
				applicationId: getEnvironmentVariable("APPLICATION_ID"),
				discordToken: getEnvironmentVariable("DISCORD_TOKEN"),
				publicKey: getEnvironmentVariable("PUBLIC_KEY")
			})
			.addDispatchEventHandler(EventName.Ready, payload => {
				expect(payload.d?.user.id).toBeDefined();

				done();

				return Promise.resolve();
			})
			.build()
			.startAsync()
			.catch((reason: unknown) => {
				done(reason);
			});
	});
});