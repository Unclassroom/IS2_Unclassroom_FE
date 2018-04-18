import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { InboxRoutingModule } from './inbox-routing.module';
import { MailComponent } from './mail/mail.component';
import {InboxRequest} from '../models/inboxrequest';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    InboxRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InboxComponent, MailComponent],
  providers: [ InboxRequest ],
})
export class InboxModule { }
