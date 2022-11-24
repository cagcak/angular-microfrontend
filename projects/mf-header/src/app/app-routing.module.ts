import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./mf-scope-header/mf-scope-header.module').then((m) => m.MfScopeHeaderModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
