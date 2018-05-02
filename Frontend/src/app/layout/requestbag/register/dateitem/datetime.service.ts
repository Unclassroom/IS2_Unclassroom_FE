import { Injectable } from '@angular/core';
import {AdDatetime} from './ad-datetime';
import {DateitemComponent} from './dateitem.component';

@Injectable()
export class DatetimeService {

  constructor() { }
  getAds() {
    return [
      new AdDatetime(DateitemComponent, {name: 'Aprende Vue.js 2', price: '20€', info: 'Nueva entrada sobre Vue.js 2'}),
       ];
  }

}
