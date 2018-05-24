import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendareventComponent} from './calendarevent.component';
import {CalendareventRoutingModule} from './calendarevent-routing.module';
import {CalendareventService} from '../services/calendarevent.service';
import { FullCalendarModule } from 'ng-fullcalendar';

@NgModule({
  imports: [
    CommonModule,
    CalendareventRoutingModule,
    FullCalendarModule
  ],
  declarations: [CalendareventComponent],
  providers: [ CalendareventService ]
})
export class CalendareventModule { }
