import { Component, TemplateRef } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CarouselItemDirective } from './carousel-item.directive';

@Component({ template: '' })
class TestComponent {}

describe('Directive: CarouselItem', () => {
	let spec: ComponentFixture<TestComponent>;
	let templateRef: TemplateRef<any>;

	beforeEach(waitForAsync(() => {
		spec = TestBed.configureTestingModule({
			declarations: [TestComponent, CarouselItemDirective],
			providers: [TemplateRef],
		}).createComponent(TestComponent);

		templateRef = TestBed.inject(TemplateRef);
	}));

	it('should create an instance', () => {
		const directive = new CarouselItemDirective(templateRef);
		expect(directive).toBeTruthy();
	});
});
