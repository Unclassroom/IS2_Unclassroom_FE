import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CalendareventComponent} from './calendarevent.component';

const routes: Routes = [
  {
    path: '', component: CalendareventComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendareventRoutingModule { }
