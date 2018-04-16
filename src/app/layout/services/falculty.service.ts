import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Faculty } from '../models/faculty';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class FalcultyService {

  private _Url = 'http://localhost:3000/faculties';
  constructor(
    private http: HttpClient) { }

  /** GET faculties from the server */
  getFaculties (): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this._Url);
  }
}
