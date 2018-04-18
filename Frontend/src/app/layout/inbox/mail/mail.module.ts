import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {MailRoutingModule} from './mail-routing.module';
import {MailComponent} from './mail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    MailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MailComponent]
})
export class MailModule { }
