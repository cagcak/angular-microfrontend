import { Router, Routes } from '@angular/router';
import { TestBed, fakeAsync, tick } from '@angular/core/testing';

import { RouterTestingModule } from '@angular/router/testing';

describe('AppRoutingModule', () => {
	let router: Router;

	const routes: Routes = [
		{
			path: '',
			loadChildren: () =>
				import('./mf-scope-header/mf-scope-header.module').then((m) => m.MfScopeHeaderModule),
		},
	];

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [RouterTestingModule.withRoutes(routes)],
		});

		router = TestBed.inject(Router);

		router.initialNavigation();
	});

	it('should have route definition', fakeAsync(() => {
		const routeDefiniton = router.config;

		tick();

		expect(routeDefiniton.length).toEqual(routes.length);
		expect(routeDefiniton.at(0)?.path).toBe(routes.at(0)?.path);
	}));
});
