import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Product, Slide } from './models';

@Component({
	selector: 'app-mf-scope-content',
	templateUrl: './mf-scope-content.component.html',
	styles: [
		`
			.products-container {
				margin: 30px;
				display: flex;
				justify-content: flex-start;
				flex-wrap: wrap;
			}
		`,
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MfScopeContentComponent {
	title = 'mf-content';

	items: Slide[] = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];

	products: Product[] = [
		{
			title: 'Product 1',
			subtitle: 'Product 1 subtitle',
			description: 'Product 1 description',
			image: 'https://via.placeholder.com/150/000000/FFFFFF?Text=angular.io',
		},
		{
			title: 'Product 2',
			subtitle: 'Product 2 subtitle',
			description: 'Product 2 description',
			image: 'https://via.placeholder.com/150/000000/FFFFFF?Text=angular.io',
		},
		{
			title: 'Product 3',
			subtitle: 'Product 3 subtitle',
			description: 'Product 3 description',
			image: 'https://via.placeholder.com/150/000000/FFFFFF?Text=angular.io',
		},
		{
			title: 'Product 4',
			subtitle: 'Product 4 subtitle',
			description: 'Product 4 description',
			image: 'https://via.placeholder.com/150/000000/FFFFFF?Text=angular.io',
		},
		{
			title: 'Product 5',
			subtitle: 'Product 5 subtitle',
			description: 'Product 5 description',
			image: 'https://via.placeholder.com/150/000000/FFFFFF?Text=angular.io',
		},
	];
}
