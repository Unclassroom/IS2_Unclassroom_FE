import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {InboxComponent} from './inbox.component';
import {MailComponent} from './mail/mail.component';


const routes: Routes = [
  {
    path: '', component: InboxComponent
  },
  { path: 'mail/:id', component: MailComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
