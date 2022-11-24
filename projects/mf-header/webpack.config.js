const {
	shareAll,
	withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
	name: 'mf-header',
	exposes: {
		'./Module': './projects/mf-header/src/app/mf-scope-header/mf-scope-header.module.ts',
	},
	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true }),
	},
});
