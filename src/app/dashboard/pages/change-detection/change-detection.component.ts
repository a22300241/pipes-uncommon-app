import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  imports: [CommonModule, TitleComponent],
  /* changeDetection: ChangeDetectionStrategy.OnPush, */
  template:`<app-title [title]="currentFramework()"></app-title>
  <pre>{{frameworkAsProperty|json}}</pre>
  <pre>{{frameworkAsSignal()|json}}</pre>
  `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed(()=>`Change detection - ${this.frameworkAsSignal().name}`);
  public frameworkAsSignal = signal({
    name: 'Angular',
    releaseDate:(2016)
  });
  public frameworkAsProperty = {
    name: 'Angular',
    releaseDate:(2016)
   };
   constructor() {
    setTimeout(() => {
      /* this.frameworkAsProperty.name = 'React'; */
      this.frameworkAsSignal.update(value=>({...value, name: 'React'}));
      console.log('Property changed to React');
    }, 3000);
   }
  }
