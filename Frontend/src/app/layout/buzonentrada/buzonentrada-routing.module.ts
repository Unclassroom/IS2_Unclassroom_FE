import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BuzonentradaComponent } from './buzonentrada.component';


const routes: Routes = [
  {
    path: '', component: BuzonentradaComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuzonentradaRoutingModule { }
