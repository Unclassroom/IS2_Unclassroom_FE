import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Opinion } from '../models/opinion';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class OpinionService {
  private _Url = 'http://localhost:3000/opinions';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET opinions from the server */
  getOpinions(): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(this._Url);
  }
  /** GET hero by id. Will 404 if id not found */
  getOpinion(id: number): Observable<Opinion> {
    const url = `${this._Url}/${id}`;
    return this.http.get<Opinion>(url).pipe(
      tap(_ => this.log(`fetched opinion id=${id}`)),
      catchError(this.handleError<Opinion>(`getOpinion id=${id}`))
    );
  }
  getOpinionsPagination (id: number): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(this._Url + '?page=' + id);
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addOpinion (opinion): Observable<Opinion> {
    return this.http.post<Opinion>(this._Url, opinion, httpOptions).pipe(
      tap(_ => this.log(`added opinion w/ id=${opinion}`)),
      catchError(this.handleError<Opinion>('addOpinion'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteOpinion (opinion: Opinion | number): Observable<Opinion> {
    const id = typeof opinion === 'number' ? opinion : opinion.id;
    const url = `${this._Url}/${id}`;

    return this.http.delete<Opinion>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted opinion id=${id}`)),
      catchError(this.handleError<Opinion>('deleteOpinion'))
    );
  }

  /** PUT: update the hero on the server */
  updateOpinion (opinion: Opinion): Observable<any> {
    return this.http.put(this._Url, opinion, httpOptions).pipe(
      tap(_ => this.log(`updated opinion id=${opinion.id}`)),
      catchError(this.handleError<any>('updateOpinion'))
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