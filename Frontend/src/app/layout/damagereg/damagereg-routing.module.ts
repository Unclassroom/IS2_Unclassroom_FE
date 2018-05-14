import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule, Routes} from '@angular/router';
import { DamageregComponent } from './damagereg.component';


const routes: Routes = [
  {
    path: '', component: DamageregComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class DamageregRoutingModule { }

