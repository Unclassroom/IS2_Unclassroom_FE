import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MycalendarComponent} from './mycalendar.component';

const routes: Routes = [
  {
    path: '', component: MycalendarComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycalendarRoutingModule { }
