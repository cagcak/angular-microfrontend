const {
	shareAll,
	withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
	name: 'mf-content',
	exposes: {
		'./Module': './projects/mf-content/src/app/mf-scope-content/mf-scope-content.module.ts',
	},
	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true }),
	},
});
