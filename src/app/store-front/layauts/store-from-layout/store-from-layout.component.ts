import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontNavbarComponent } from "../../components/front-navbar/front-navbar.component";

@Component({
  selector: 'app-store-from-layout',
  imports: [RouterOutlet, FrontNavbarComponent],
  templateUrl: './store-from-layout.component.html',
})
export class StoreFromLayoutComponent { }
