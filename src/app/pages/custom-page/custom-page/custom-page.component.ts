import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../../pipes/toggle-case.pipe';
import { heroes } from '../../../data/heroes.data';
import { CanFlyPipe } from '../../../pipes/canFly.pipe';
import { HeroColorPipe } from '../../../pipes/heroColor.pipe';
import { HeroTextColorPipe } from '../../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { HeroCreatorPipe } from '../../../pipes/hero-creator.pipe';
import { HeroSortByPipePipe } from '../../../pipes/hero-sort-by.pipe.ts.pipe';
import { Hero } from '../../../interfaces/hero.interface';
import { HeroFilterPipe } from '../../../pipes/hero.filter.pipe';

@Component({
  selector: 'app-custom-page',
  imports: [ ToggleCasePipe, CanFlyPipe, HeroColorPipe, HeroTextColorPipe,TitleCasePipe,
    HeroCreatorPipe, HeroSortByPipePipe, HeroFilterPipe],
  templateUrl: './custom-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomPageComponent {
  name = signal('Juan Uriel');
  upperCase = signal(true);
  heros=signal(heroes);
  sortBy=signal< keyof Hero|null>(null);
  serchQuery=signal('');
}
