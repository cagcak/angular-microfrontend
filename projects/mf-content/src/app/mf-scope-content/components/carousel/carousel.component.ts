import {
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	ContentChildren,
	ElementRef,
	HostListener,
	Input,
	QueryList,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import {
	AnimationBuilder,
	AnimationFactory,
	AnimationPlayer,
	animate,
	style,
} from '@angular/animations';
import { CarouselItemDirective, CarouselItemElementDirective } from '../../directives';

import { NgStyle } from '@angular/common';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements AfterViewInit {
	@Input()
	timing = '250ms ease-in';

	@Input()
	showControls = true;

	@ContentChildren(CarouselItemDirective)
	items: QueryList<CarouselItemDirective>;

	@ViewChildren(CarouselItemElementDirective, { read: ElementRef })
	private itemsElements: QueryList<ElementRef>;

	@ViewChild('carousel', { static: false })
	carousel: ElementRef;

	@HostListener('window:resize', ['$event'])
	onResize($event: Event) {
		const width = ($event.target as Window).innerWidth;

		this.setReCalculatedSlideSize(width);
	}

	private player: AnimationPlayer;
	private itemWidth: number;
	private currentSlide = 0;

	carouselWrapperStyle: Pick<NgStyle, 'ngStyle'>['ngStyle'] & { width?: string } = {};

	constructor(private builder: AnimationBuilder) {}

	private buildAnimation(offset: number) {
		return this.builder.build([
			animate(this.timing, style({ transform: `translateX(-${offset}px)` })),
		]);
	}

	private navigateSlider() {
		this.setReCalculatedSlideSize();

		const offset = this.currentSlide * this.itemWidth;
		const myAnimation: AnimationFactory = this.buildAnimation(offset);

		this.player = myAnimation.create(this.carousel.nativeElement);

		this.player.play();
	}

	private setReCalculatedSlideSize(innerWidth?: number) {
		this.itemWidth = this.itemsElements?.first?.nativeElement?.getBoundingClientRect()?.width;
		this.carouselWrapperStyle.width = `${innerWidth || this.itemWidth}px`;
	}

	next() {
		if (this.currentSlide + 1 === this.items.length) return;

		this.currentSlide = (this.currentSlide + 1) % this.items.length;

		this.navigateSlider();
	}

	prev() {
		if (this.currentSlide === 0) return;

		this.currentSlide = (this.currentSlide - 1 + this.items.length) % this.items.length;

		this.navigateSlider();
	}

	ngAfterViewInit() {
		this.setReCalculatedSlideSize(window.innerWidth);
	}
}
