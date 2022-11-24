import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AnimationBuilder } from '@angular/animations';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('CarouselComponent', () => {
	let component: CarouselComponent;
	let fixture: ComponentFixture<CarouselComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			imports: [MatCardModule, MatIconModule],
			declarations: [CarouselComponent],
			providers: [AnimationBuilder],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CarouselComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
