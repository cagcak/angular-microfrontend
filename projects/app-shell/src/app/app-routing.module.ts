import { RouterModule, Routes } from '@angular/router';

import { DummyComponent } from './components';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { loadRemoteModule } from '@angular-architects/module-federation';

const devRoutes: Routes = [
	{
		path: '@HEADER',
		loadChildren: () =>
			loadRemoteModule({
				type: 'manifest',
				remoteName: 'mf-header',
				exposedModule: './Module',
			}).then((m) => m.MfScopeHeaderModule),
	},
	{
		path: '@CONTENT',
		loadChildren: () =>
			loadRemoteModule({
				type: 'manifest',
				remoteName: 'mf-content',
				exposedModule: './Module',
			}).then((m) => m.MfScopeContentModule),
	},
	{
		path: '@FOOTER',
		loadChildren: () =>
			loadRemoteModule({
				type: 'manifest',
				remoteName: 'mf-footer',
				exposedModule: './Module',
			}).then((m) => m.MfScopeFooterModule),
	},
];

const routes: Routes = [
	{
		path: '',
		component: DummyComponent,
		pathMatch: 'full',
	},
	...(environment.production ? [] : devRoutes),
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
