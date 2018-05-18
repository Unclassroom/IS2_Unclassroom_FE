import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {InboxComponent} from './inbox.component';
import {MailComponent} from './mail/mail.component';
import {ClassAvaComponent} from './mail/class-ava/class-ava.component';


const routes: Routes = [
  {
    path: '', component: InboxComponent
  },
  { path: 'mail/:id', component: MailComponent },
  { path: 'mail/:id/class-ava', component: ClassAvaComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
