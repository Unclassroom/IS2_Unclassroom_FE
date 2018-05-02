import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {ComentComponent} from './coment.component';

const routes: Routes = [
  {
    path: '', component: ComentComponent
  },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ComentRoutingModule { }