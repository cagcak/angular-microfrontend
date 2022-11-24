import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-mf-scope-footer',
	template: `
		<mat-card>
			<mat-card-content>app-mf-scope-footer</mat-card-content>
		</mat-card>
	`,
	styles: [
		`
			mat-card-content {
				display: flex !important;
				justify-content: center;
			}
		`,
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MfScopeFooterComponent {}
