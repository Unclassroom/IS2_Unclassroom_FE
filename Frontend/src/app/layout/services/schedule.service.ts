import { Injectable } from '@angular/core';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {Faculty} from '../models/faculty';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MessageService} from './message.service';
import {Schedule} from '../models/schedule';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ScheduleService {
  private _Url = 'http://localhost:3000/classroom_taken_schedules?id=1&ini="2018-05-8"&fin="2018-05-25"';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET faculties from the server */
  getSchedule (): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this._Url);
  }
  public getEvents(): Observable<any> {
    const data  = this.getSchedule();
    return of(data);
  }

}
