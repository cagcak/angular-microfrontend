import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { Router, Routes } from '@angular/router';

import { Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MfScopeHeaderComponent } from './mf-scope-header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MfScopeHeaderModule', () => {
	let router: Router;
	let location: Location;
	let fixture: ComponentFixture<MfScopeHeaderComponent>;

	const HEADER_ROUTES: Routes = [
		{
			path: '',
			component: MfScopeHeaderComponent,
		},
	];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MatToolbarModule,
				MatIconModule,
				MatButtonModule,
				RouterTestingModule.withRoutes(HEADER_ROUTES),
			],
			declarations: [MfScopeHeaderComponent],
		});

		router = TestBed.inject(Router);
		location = TestBed.inject(Location);
		fixture = TestBed.createComponent(MfScopeHeaderComponent);

		router.initialNavigation();
	});

	it('should have route definition', () => {
		const routeDefiniton = router.config;

		expect(routeDefiniton.length).toEqual(HEADER_ROUTES.length);
		expect(routeDefiniton.at(0)?.path).toBe(HEADER_ROUTES.at(0)?.path);
		expect(routeDefiniton.at(0)?.component).toBe(fixture.componentRef.componentType);
	});

	it('should navigate to first route definition', fakeAsync(() => {
		const currentRouterUrl = router.url;
		router.navigate([HEADER_ROUTES[0].path]);

		tick();

		expect(currentRouterUrl).toBe('/');
		expect(location.path()).toBe('/');
	}));
});
