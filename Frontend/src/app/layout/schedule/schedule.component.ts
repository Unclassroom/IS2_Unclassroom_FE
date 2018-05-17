import {Component, OnInit, ViewChild} from '@angular/core';
import {Options} from 'fullcalendar';
import {CalendarComponent} from 'ng-fullcalendar';
import {ScheduleService} from '../services/schedule.service';
import {Building} from '../models/building';
import {Schedule} from '../models/schedule';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  calendarOptions: Options;
  displayEvent: any;
  schedule: Schedule[];
  scheduledata = [];
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(protected scheduleeventService: ScheduleService) { }

  ngOnInit() {
    this.getSchedule();
  }
  public dataSchedule(requeststate) {
    this.calendarOptions = {
      editable: true,
      eventLimit: false,
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'agendaWeek,agendaDay'
      },
      events:  this.scheduledata[0],
      defaultView: 'agendaWeek',
      businessHours:  {
        // days of week. an array of zero-based day of week integers (0=Sunday)
        dow: [ 0, 1, 2, 3, 4, 5, 6], // Sunday - Saturday

        start: '07:00', // a start time (7am in this example)
        end: '22:00', // an end time (22pm in this example)
      }

    };
  }
  getSchedule(): void {
    this.scheduleeventService.getSchedule()
      .subscribe(schedule => {
        this.scheduledata.push(schedule);
        this.dataSchedule(this.scheduledata[0]);
        this.schedule = schedule;
      });

  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }

}
