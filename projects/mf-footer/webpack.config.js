const {
	shareAll,
	withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
	name: 'mf-footer',
	exposes: {
		'./Module': './projects/mf-footer/src/app/mf-scope-footer/mf-scope-footer.module.ts',
	},
	shared: {
		...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto', eager: true }),
	},
});
