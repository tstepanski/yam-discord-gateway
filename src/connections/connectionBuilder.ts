import {OperationHandler} from "./operationHandler";
import {SimpleHandler} from "./simpleHandler";
import {ConnectionContract} from "./connectionContract";
import {Connection} from "./connection";
import {builtInHandlers} from "./builtInHandlers";
import {OperationHandlerFunction} from "./operationHandlerFunction";
import {Secrets} from "./secrets";
import {IdentifyConnectionProperties, Intent, TEvent} from "../types/payloads";
import {OpCode} from "../types";
import {DispatchOperationHandlerFunction} from "./dispatchOperationHandlerFunction";
import {DispatchOperationHandler} from "./dispatchOperationHandler";
import {SimpleDispatchHandler} from "./simpleDispatchHandler";
import {DispatchHandlerWrapper} from "./dispatchHandlerWrapper";
import {BackoffStrategy} from "./backoff";
import {FixedBackoffStrategy} from "./backoff/fixedBackoffStrategy";
import {ExponentialBackoffStrategy} from "./backoff/exponentialBackoffStrategy";
import {JitterBackoffStrategy} from "./backoff/jitterBackoffStrategy";
import {NoReconnectBackoffStrategy} from "./backoff/noReconnectBackoffStrategy";

export class ConnectionBuilder {
	private readonly handlers: OperationHandler<any>[];
	private readonly dispatchHandlers: DispatchOperationHandler<any>[];
	private desiredIntents: Intent;
	private readonly identifyConnectionProperties: IdentifyConnectionProperties;
	private backoffStrategy: BackoffStrategy;

	private constructor(private readonly secrets: Secrets) {
		this.handlers = [...builtInHandlers];
		this.dispatchHandlers = [];
		this.desiredIntents = Intent.NONE;
		this.backoffStrategy = new FixedBackoffStrategy(10);

		this.identifyConnectionProperties = <IdentifyConnectionProperties>{
			browser: "unknown",
			device: "unknown",
			os: "unknown"
		};
	}

	public static new(secrets: Secrets): ConnectionBuilder {
		return new ConnectionBuilder(secrets);
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

	public addDispatchEventHandler<T extends TEvent>(eventName: T,
	                                                 handler: DispatchOperationHandlerFunction<T>): ConnectionBuilder {
		const simpleHandler = new SimpleDispatchHandler<T>(eventName, handler);

		this.dispatchHandlers.push(simpleHandler);

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

	public withFixedBackoffStrategy(delayInMilliseconds: number,
	                                maximumAttempts?: number): ConnectionBuilder {
		this.backoffStrategy = new FixedBackoffStrategy(delayInMilliseconds, maximumAttempts);

		return this;
	}

	public withExponentialBackoffStrategy(baseDelay?: number,
	                                      maximumDelay?: number,
	                                      maximumAttempts?: number): ConnectionBuilder {
		this.backoffStrategy = new ExponentialBackoffStrategy(baseDelay, maximumDelay, maximumAttempts);

		return this;
	}

	public withJitterBackoffStrategy(baseDelay?: number,
	                                 maximumDelay?: number,
	                                 jitterFactor?: number,
	                                 maximumAttempts?: number): ConnectionBuilder {
		this.backoffStrategy = new JitterBackoffStrategy(baseDelay, maximumDelay, jitterFactor, maximumAttempts);

		return this;
	}

	public withCustomBackoffStrategy(backoffStrategy: BackoffStrategy): ConnectionBuilder {
		this.backoffStrategy = backoffStrategy;

		return this;
	}

	public withNoReconnectStrategy(): ConnectionBuilder {
		this.backoffStrategy = new NoReconnectBackoffStrategy();

		return this;
	}

	public build(): ConnectionContract {
		const dispatchHandlerWrapper = new DispatchHandlerWrapper(this.dispatchHandlers);

		return new Connection([...this.handlers, dispatchHandlerWrapper], this.desiredIntents,
			this.identifyConnectionProperties, this.secrets, this.backoffStrategy);
	}
}
