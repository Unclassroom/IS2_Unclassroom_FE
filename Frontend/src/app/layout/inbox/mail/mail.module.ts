import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {MailRoutingModule} from './mail-routing.module';
import {MailComponent} from './mail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ClassAvaComponent } from './class-ava/class-ava.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    MailRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MailComponent, ClassAvaComponent]
})
export class MailModule { }
