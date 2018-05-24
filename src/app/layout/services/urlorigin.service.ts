import { Injectable } from '@angular/core';
import {catchError, tap} from 'rxjs/operators';
import {Faculty} from '../models/faculty';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UrloriginService {

  private _Url;
  constructor() { }
  /** GET hero by id. Will 404 if id not found */
  getUrl(relativeModule: string): any {
    return this._Url = 'http://localhost:3000/' + relativeModule;
  }
}
