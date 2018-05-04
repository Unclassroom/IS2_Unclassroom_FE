import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoadrequestComponent} from './loadrequest.component';

const routes: Routes = [
  {path: '', component: LoadrequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadrequestRoutingModule { }
