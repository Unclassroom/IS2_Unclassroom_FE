import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CalendareventService {

    public getEvents(): Observable<any> {
    const dateObj = new Date();
    const yearMonth = dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
    const data: any = [{
      title: 'All Day Event',
      start: yearMonth + '-01'
    },
      {
        title: 'Tipo de la solicitud concatenado con el tipo del usuario',
        start: '2018-01-09T12:30:00',
        end:   '2018-01-09T14:30:00'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: yearMonth + '-09T16:00:00'
      },
      {
        id: 12,
        title: 'Data Example Event',
        start: yearMonth + '09T12:30:00'
      },
      {
        title: 'Conference',
        start: yearMonth + '-11',
        end: yearMonth + '-13'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T10:30:00',
        end: yearMonth + '-12T12:30:00'
      },
      {
        title: 'Lunch',
        start: yearMonth + '-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: yearMonth + '-12T14:30:00'
      },
      {
        title: 'Happy Hour',
        start: yearMonth + '-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: yearMonth + '-12T20:00:00'
      },
      {
        title: 'Birthday Party',
        start: yearMonth + '-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: yearMonth + '-28'
      }];
    return of(data);
  }
  constructor() { }

}
