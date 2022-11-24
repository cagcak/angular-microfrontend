import { Pipe, PipeTransform } from '@angular/core';

import { NgStyle } from '@angular/common';

@Pipe({
	name: 'avatar',
})
export class AvatarPipe implements PipeTransform {
	transform(value: string): Pick<NgStyle, 'ngStyle'>['ngStyle'] {
		return {};
	}
}
