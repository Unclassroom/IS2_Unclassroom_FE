import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InboxComponent } from './inbox.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { InboxRoutingModule } from './inbox-routing.module';
import { MailComponent } from './mail/mail.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    InboxRoutingModule
  ],
  declarations: [InboxComponent, MailComponent]
})
export class InboxModule { }
