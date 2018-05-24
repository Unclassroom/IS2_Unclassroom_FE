import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MycalendarComponent } from './mycalendar.component';
import {CalendareventRoutingModule} from '../calendarevent/calendarevent-routing.module';
import {MycalendarRoutingModule} from './mycalendar-routing.module';

@NgModule({
  imports: [
    CommonModule,
    MycalendarRoutingModule,
  ],
  declarations: [MycalendarComponent]
})
export class MycalendarModule { }
