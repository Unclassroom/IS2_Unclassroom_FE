import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { DamagerecordComponent } from './damagerecord.component';

const routes: Routes = [
  {
    path: '', component: DamagerecordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DamagerecordRoutingModule { }

