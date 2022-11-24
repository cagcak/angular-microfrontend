import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-mf-scope-header',
	templateUrl: './mf-scope-header.component.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MfScopeHeaderComponent {
	title = 'app-mf-scope-header';
}
