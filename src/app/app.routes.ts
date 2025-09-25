import { PseudoClass } from './../../node_modules/lightningcss/node/ast.d';
import { Routes } from '@angular/router';
import { CustomPageComponent } from './pages/custom-page/custom-page/custom-page.component';

export const routes: Routes = [
  {
    path:'',
    component:CustomPageComponent,

  },
  {
    path:'**',
    redirectTo:'',
  }
];
