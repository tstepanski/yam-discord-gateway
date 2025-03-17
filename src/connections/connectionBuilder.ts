import {OperationHandler} from "./operationHandler";
import {SimpleHandler} from "./simpleHandler";
import {ConnectionContract} from "./connectionContract";
import {Connection} from "./connection";
import {builtInHandlers} from "./builtInHandlers";
import {OperationHandlerFunction} from "./operationHandlerFunction";
import {Secrets} from "./secrets";
import {IdentifyConnectionProperties, Intent} from "../types/payloads";
import {OpCode} from "../types";

export class ConnectionBuilder {
	private readonly handlers: OperationHandler<any>[];
	private desiredIntents: Intent;
	private readonly identifyConnectionProperties: IdentifyConnectionProperties;

	private constructor(private readonly secrets: Secrets) {
		this.handlers = [...builtInHandlers];
		this.desiredIntents = Intent.NONE;

		this.identifyConnectionProperties = <IdentifyConnectionProperties>{
			browser: "unknown",
			device: "unknown",
			os: "unknown"
		};
	}

	public addDesiredIntent(intent: Intent): ConnectionBuilder {
		this.desiredIntents |= intent;

		return this;
	}

	public addEventHandler<T>(opCode: OpCode<T>,
	                          handler: OperationHandlerFunction<T>): ConnectionBuilder {
		const simpleHandler = new SimpleHandler<T>(opCode, handler);

		this.handlers.push(simpleHandler);

		return this;
	}

	public withOperatingSystemReportedAs(operatingSystem: string): ConnectionBuilder {
		this.identifyConnectionProperties.os = operatingSystem;

		return this;
	}

	public withBrowserReportedAs(browser: string): ConnectionBuilder {
		this.identifyConnectionProperties.browser = browser;

		return this;
	}

	public withDeviceReportedAs(device: string): ConnectionBuilder {
		this.identifyConnectionProperties.device = device;

		return this;
	}

	public build(): ConnectionContract {
		return new Connection(this.handlers, this.desiredIntents, this.identifyConnectionProperties, this.secrets);
	}

	public static new(secrets: Secrets): ConnectionBuilder {
		return new ConnectionBuilder(secrets);
	}
}
