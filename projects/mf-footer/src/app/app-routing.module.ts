import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
	{
		path: '',
		loadChildren: () =>
			import('./mf-scope-footer/mf-scope-footer.module').then((m) => m.MfScopeFooterModule),
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
