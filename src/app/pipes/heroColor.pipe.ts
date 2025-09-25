import { Pipe, type PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'appHeroColor',
})
export class HeroColorPipe implements PipeTransform {

  transform(value: Color): string {
    return Color[value];
  }

}
