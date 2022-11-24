import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
	let component: ProductComponent;
	let fixture: ComponentFixture<ProductComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [MatCardModule, MatIconModule],
			declarations: [ProductComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ProductComponent);
		component = fixture.componentInstance;

		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
