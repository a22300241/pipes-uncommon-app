import { Pipe, type PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'heroSortBy',
})
export class HeroSortByPipePipe implements PipeTransform {

  transform(value: Hero[], sortBy: keyof Hero | null ): Hero[] {
    if (!sortBy) {
      return value;
    }
    if (sortBy === 'name') {
      return value.sort((a, b) => a.name.localeCompare(b.name));
    }
     if (sortBy === 'canFly') {
      return value.sort((a, b) => (a.canFly?1:-1) - (b.canFly?1:-1));
    }
    if (sortBy === 'color') {
      return value.sort((a, b) => a.color - b.color);
    }
     if (sortBy === 'creator') {
      return value.sort((a, b) => a.creator - b.creator);
    }
    else{return value;}
  }
}
