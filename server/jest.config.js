const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
	preset: 'ts-jest',
	testMatch: ['**/+(*.)+(spec).+(ts|js)?(x)'],
	transform: {
		...tsjPreset.transform,
	},
	testEnvironment: 'node',
	displayName: 'production-server',
};
