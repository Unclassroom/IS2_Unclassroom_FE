import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import { AuthGuard } from './_guards/index';
import { ProfileComponent } from './profile/index';


const routes: Routes = [
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'home', loadChildren: './landing/landing.module#LandingModule'},
  { path: 'landing', loadChildren: './landing/landing.module#LandingModule', pathMatch: 'full'},
  { path: '', loadChildren: './landing/landing.module#LandingModule', pathMatch: 'full'},
  { path: 'layout', loadChildren: './layout/layout.module#LayoutModule', canActivate: [AuthGuard] },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'register', loadChildren: './register/register.module#RegisterModule' }
];
// agregar rutas al nivel de la raiz

// Hacer las rutas disponibles para su uso

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
