import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SidemenuComponent } from '../shared/sidemenu/sidemenu.component';


@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, SidemenuComponent,],
  templateUrl: './dashboard.component.html',
})
export default class DashboardComponent { }
