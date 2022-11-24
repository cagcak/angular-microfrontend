import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Product } from '../../models';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styles: [
		`
			.product-card {
				max-width: 300px;
				margin: 10px;
			}
			.product-image {
				max-width: 240px;
			}
		`,
	],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductComponent {
	@Input()
	product: Product;
}
