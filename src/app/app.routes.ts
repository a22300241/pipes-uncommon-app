import { PseudoClass } from './../../node_modules/lightningcss/node/ast.d';
import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { CustomPageComponent } from './pages/custom-page/custom-page/custom-page.component';
import { NotAuthenticatedGuard } from '@auth/guards/not-authenticated.guard';

export const routes: Routes = [
  {path:'auth',loadChildren:()=> import('./auth/auth.routes'),
    canMatch:[NotAuthenticatedGuard]
  },
  {path:'admin',loadChildren:()=>import('./admin_dashboard/admin-dashoard.routes')},
  {path:'',loadChildren:()=>import('./store-front/store-front.routes')},

  {path:'',component:HomePageComponent},
  {path:'about',component:AboutPageComponent},
  {path:'contact',component:ContactPageComponent},
  {path:'**',redirectTo:''},
  {
    path:'reactive',
    loadChildren: () => import('./reactive/reactive.routes').then((m) => m.reactiveRoutes)
  },
  {
    path:'auth',
    loadChildren: () => import('./auth/auth.routes'),
  },
  {
    path:'country',
    loadChildren: () => import('./country/country.routes').then((m) => m.countryRoutes)
  },
  {
    path:'**',
    redirectTo:'reactive',
  },
];
