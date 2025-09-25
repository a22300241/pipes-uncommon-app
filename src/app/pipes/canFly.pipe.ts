import { Pipe, PipeTransform } from '@angular/core';
import { heroes } from '../data/heroes.data';

@Pipe({
  name: 'canfly'
})

export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): 'Puede volar' | 'No puede volar' {
    return value ? 'Puede volar' : 'No puede volar';
  }
}
