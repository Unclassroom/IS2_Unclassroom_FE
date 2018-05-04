import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

interface IDatetime {
  name: string;
}

export const DUMMY_DATA = [
  {
    name: 'number'
  },
  {
    name: 'number'
  },
  {
    name: 'number'
  }
];

@Injectable()
export class DatetimeService {
  private datetimesSubject = new BehaviorSubject([]);
  private datetimes: IDatetime[];

  constructor() { }

  getDatetimes(): Observable<IDatetime[]> {
    return this.datetimesSubject.asObservable();
  }

  private refresh() {
    // Emitir los nuevos valores para que todos los que dependan se actualicen.
    this.datetimesSubject.next(this.datetimes);
  }

  createNewDatetime(datetime: IDatetime) {
    /**
     * Evitar hacer this.user.push() pues estaríamos modificando los valores directamente,
     * se debe generar un nuevo array !!!!.
     */
    this.datetimes = [...this.datetimes, datetime];
    // this.refresh();
  }

  loadDummyData() {
    this.datetimes = DUMMY_DATA;
    this.refresh();
  }


}
