import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BuildingRoutingModule} from '../building/building-routing.module';
import {ScheduleRoutingModule} from './schedule-routing.module';
import {BuildingComponent} from '../building/building.component';
import {ScheduleComponent} from './schedule.component';
import {FullCalendarModule} from 'ng-fullcalendar';
import {CalendareventService} from '../services/calendarevent.service';

@NgModule({
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    FullCalendarModule
  ],
  declarations: [ ScheduleComponent],
  providers: [ CalendareventService ]
})
export class ScheduleModule { }
