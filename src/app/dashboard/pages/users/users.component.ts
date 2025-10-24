import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Users } from '../../../services/users';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '../../../shared/title/title.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [CommonModule, TitleComponent,RouterModule],
  templateUrl: './users.component.html',
})
export default class UsersComponent {
  public usersService=inject(Users)

}
