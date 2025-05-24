/** @type {import('ts-jest').JestConfigWithTsJest} **/

export default {
	modulePathIgnorePatterns: [
		"<rootDir>/dist/"
	],
	testEnvironment: "node",
	transform: {
		"^.+\.ts?$": [
			"ts-jest",
			{}
		]
	},
	testPathIgnorePatterns: [
		"<rootDir>/dist/"
	],
	transformIgnorePatterns: [
		"node_modules/(?!.*\\.ts$)"
	]
};