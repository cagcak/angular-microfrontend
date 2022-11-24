import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
		<h2 class="title">{{ title }}</h2>
		<router-outlet></router-outlet>
	`,
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	title = 'app-shell';
}
