import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { InboxRoutingModule } from './inbox-routing.module';
import { MailRoutingModule } from './mail/mail-routing.module';
import { MailComponent } from './mail/mail.component';
import { ClassAvaComponent } from './mail/class-ava/class-ava.component';
import {InboxRequest} from '../models/inboxrequest';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    InboxRoutingModule,
    MailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InboxComponent, MailComponent, ClassAvaComponent],
  providers: [ InboxRequest ],
})
export class InboxModule { }
