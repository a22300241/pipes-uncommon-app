import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'app-defeder-options',
  imports: [CommonModule, HeavyLoadersFastComponent, TitleComponent],
  templateUrl: './defeder-options.component.html',
})
export default class DefederOptionsComponent { }
