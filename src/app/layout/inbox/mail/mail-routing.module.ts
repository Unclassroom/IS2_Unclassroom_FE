import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MailComponent} from './mail.component';
import {ClassAvaComponent} from './class-ava/class-ava.component';


const routes: Routes = [
  { path: '', component: MailComponent},
  { path: 'class-ava', component: ClassAvaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: []
})
export class MailRoutingModule { }
