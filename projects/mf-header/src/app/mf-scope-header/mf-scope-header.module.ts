import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MfScopeHeaderComponent } from './mf-scope-header.component';
import { NgModule } from '@angular/core';

const HEADER_ROUTES: Routes = [
	{
		path: '',
		component: MfScopeHeaderComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		MatToolbarModule,
		MatIconModule,
		MatButtonModule,
		RouterModule.forChild(HEADER_ROUTES),
	],
	declarations: [MfScopeHeaderComponent],
})
export class MfScopeHeaderModule {}
