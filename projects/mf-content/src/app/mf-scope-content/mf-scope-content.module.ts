import { CarouselComponent, ProductComponent } from './components';
import { CarouselItemDirective, CarouselItemElementDirective } from './directives';
import { RouterModule, Routes } from '@angular/router';

import { AvatarPipe } from './pipes';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MfScopeContentComponent } from './mf-scope-content.component';
import { NgModule } from '@angular/core';

const CONTENT_ROUTES: Routes = [
	{
		path: '',
		component: MfScopeContentComponent,
	},
];

@NgModule({
	imports: [
		CommonModule,
		MatButtonModule,
		MatIconModule,
		MatCardModule,
		RouterModule.forChild(CONTENT_ROUTES),
	],
	declarations: [
		MfScopeContentComponent,
		CarouselComponent,
		CarouselItemDirective,
		CarouselItemElementDirective,
		ProductComponent,
		AvatarPipe,
	],
})
export class MfScopeContentModule {}
