import { Routes } from '@angular/router';
import { FullscreenMapPageComponent } from './pages/fullscreen-map-page/fullscreen-map-page.component';
import { MarkersPageComponent } from './pages/fullscreen-map-page/markers-page/markers-page.component';
import { HausesPageComponent } from './pages/fullscreen-map-page/hauses-page/hauses-page.component';

export const routes: Routes = [
  {path:'fullscreen',component:FullscreenMapPageComponent, title:'FullScreen Map' },
  {path:'markers', component:MarkersPageComponent,title:'Marcadores'},
  {path:'hauses', component:HausesPageComponent,title:'Propiedades disponibles'},
  {path:'**', redirectTo:'fullscreen'}
];
