import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentregComponent } from './comentreg.component';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  {
    path: '', component: ComentregComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ComentregRoutingModule { }

