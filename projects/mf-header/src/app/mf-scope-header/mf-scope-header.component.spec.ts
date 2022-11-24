import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarnessLoader } from '@angular/cdk/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarHarness } from '@angular/material/toolbar/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MfScopeHeaderComponent } from './mf-scope-header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';

describe('AppComponent', () => {
	let fixture: ComponentFixture<MfScopeHeaderComponent>;
	let app: MfScopeHeaderComponent;
	let loader: HarnessLoader;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [RouterTestingModule, MatToolbarModule, MatIconModule, MatButtonModule],
			declarations: [MfScopeHeaderComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(MfScopeHeaderComponent);
		fixture.detectChanges();

		app = fixture.componentInstance;
		loader = TestbedHarnessEnvironment.loader(fixture);
	});

	it('should create the app', () => {
		expect(app).toBeTruthy();
	});

	it(`should have as title 'app-mf-scope-header'`, () => {
		expect(app.title).toEqual('app-mf-scope-header');
	});

	it('should render title', () => {
		fixture.detectChanges();
		const compiled = fixture.nativeElement as HTMLElement;
		const containerEl = compiled.getElementsByTagName('mat-toolbar');
		const title = containerEl.item(0)?.querySelector('span.title')?.textContent;

		expect(title).toContain('app-mf-scope-header');
	});

	it('should get toolbar text', async () => {
		const toolbars = await loader.getAllHarnesses(MatToolbarHarness);
		const iconTextContexts = ['menu', 'share'];
		const titleContext = 'app-mf-scope-header';
		const combinedMarkupText = `${iconTextContexts[0]}${titleContext}${iconTextContexts[1]}`;

		expect(toolbars.length).toEqual(1);
		expect(await toolbars[0].getRowsAsText()).toEqual([combinedMarkupText]);
	});
});
