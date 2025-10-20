import { Routes } from "@angular/router";
import { AuthLayoutComponent } from "./layout/auth-layout/auth-layout.component";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from "./pages/register-page/register-page.component";



export   const authRoutes: Routes =[
  {
    path: '',
    children:[
      {
        path:'sign-up',
        component:RegisterPageComponent,
      },
      {
        path:'**',
        redirectTo:'sign-up',
      }
    ]
  },
  { path:'',
    component:AuthLayoutComponent,
    children:[
      {path:'login',component:LoginPageComponent,},
      {path:'register', component:RegisterPageComponent},
      {path:'**', redirectTo:'login'}
    ]
  }
]
export default authRoutes;
