import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Faculty } from '../models/faculty';
import { MessageService } from './message.service';
import {UrloriginService} from './urlorigin.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const relativeModule = 'faculties';
@Injectable()
export class FalcultyService {
  private _Url = this.urloriginService.getUrl(relativeModule);
  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private urloriginService: UrloriginService) { }

  /** GET faculties from the server */
  getFaculties (): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this._Url);
  }
  /** GET hero by id. Will 404 if id not found */
  getFaculty(id: number): Observable<Faculty> {
    const url = `${this._Url}/${id}`;
    return this.http.get<Faculty>(url).pipe(
      tap(_ => this.log(`fetched faculty id=${id}`)),
      catchError(this.handleError<Faculty>(`getFaculty id=${id}`))
    );
  }
  getFacultiesPagination (id: number): Observable<Faculty[]> {
    return this.http.get<Faculty[]>(this._Url + '?page=' + id);
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addFaculty (faculty): Observable<Faculty> {
    return this.http.post<Faculty>(this._Url, faculty, httpOptions).pipe(
      tap(_ => this.log(`added faculty w/ id=${faculty}`)),
      catchError(this.handleError<Faculty>('addFaculty'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteFaculty (faculty: Faculty | number): Observable<Faculty> {
    const id = typeof faculty === 'number' ? faculty : faculty.id;
    const url = `${this._Url}/${id}`;

    return this.http.delete<Faculty>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted faculty id=${id}`)),
      catchError(this.handleError<Faculty>('deleteFaculty'))
    );
  }

  /** PUT: update the hero on the server */
  updateFaculty (faculty: Faculty): Observable<any> {
    return this.http.put(this._Url, faculty, httpOptions).pipe(
      tap(_ => this.log(`updated faculty id=${faculty.id}`)),
      catchError(this.handleError<any>('updateFaculty'))
    );
  }


  private log(message: string) {
    this.messageService.add('RequestService: ' + message);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
