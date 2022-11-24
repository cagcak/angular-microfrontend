import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MfScopeFooterComponent } from './mf-scope-footer.component';
import { NgModule } from '@angular/core';

const FOOTER_ROUTES: Routes = [
	{
		path: '',
		component: MfScopeFooterComponent,
	},
];

@NgModule({
	imports: [CommonModule, MatCardModule, RouterModule.forChild(FOOTER_ROUTES)],
	declarations: [MfScopeFooterComponent],
})
export class MfScopeFooterModule {}
