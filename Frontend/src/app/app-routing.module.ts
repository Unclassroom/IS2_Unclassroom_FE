import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {BuzonentradaModule} from './layout/buzonentrada/buzonentrada.module';
import {LandingComponent} from "./landing/landing.component";

const routes: Routes = [
  { path: 'home', loadChildren: './landing/landing.module#LandingModule'},
  { path: 'landing', loadChildren: './landing/landing.module#LandingModule'},
  { path: '', loadChildren:'./landing/landing.module#LandingModule', pathMatch: 'full'},
  { path: 'layout', loadChildren: './layout/layout.module#LayoutModule'},
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
