import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "",
    component: HomeComponent,
    children:[
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
      {
        path: 'dashboard',
        loadChildren: ()=>
          import('./dashboard/dashboard-routing.module').then((m) => m.DashboardRoutingModule),
      },
      {
        path: 'about-us',
        loadChildren: ()=>
        import('./about-us/about-us.routing.module').then((m) => m.AboutUsComponentRoutingModule)
      }
    ]
  },
  { path:'login', component:LoginComponent},
  { path:'signup', component:SignupComponent},
  { path:'forgot-password', component:ForgotPasswordComponent},
  { path: '**', component:  PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
