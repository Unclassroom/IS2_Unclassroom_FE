import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Opinion } from '../models/opinion';
import { MessageService } from './message.service';
import {UrloriginService} from './urlorigin.service';
import {InboxRequest} from '../models/inboxrequest';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class OpinionService {
  private AllOpinionUrl = this.urloriginService.getUrl('opinions');
  private _UrlPages = this.urloriginService.getUrl('opinions_pages');

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private urloriginService: UrloriginService) { }

  /** GET opinions from the server */
  getOpinions(): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(this.AllOpinionUrl);
  }
  getPagination (id: number): Observable<Opinion[]> {
    return this.http.get<Opinion[]>(this.AllOpinionUrl + '?page=' + id);
  }

  getPages (): Observable<number> {
    return this.http.get<number>(this._UrlPages);
  }
  /** GET hero by id. Will 404 if id not found */
  getOpinion(id: number): Observable<Opinion> {
    const url = `${this.AllOpinionUrl}/${id}`;
    return this.http.get<Opinion>(url).pipe(
      tap(_ => this.log(`fetched opinion id=${id}`)),
      catchError(this.handleError<Opinion>(`getOpinion id=${id}`))
    );
  }

  //////// Save methods //////////


  /** POST: add a new hero to the server */
  addOpinion (opinion: any) {
    console.log("in addRequest service")
    return this.http.post(this.AllOpinionUrl,
    {
      "user_type":opinion.user_type,
      "user_id":opinion.user_id,
      "classroom_id": opinion.classroom_id,
      "description": opinion.description,
    }
    )
    .map(
      result => {
        console.log("add Opinion service sucessful")
        console.log("add Opinion service sucessful")
        // console.log(localStorage.getItem('token'))
        return result;
      },
      err => {
        alert("Error in add opinion service")
        console.log("Error in add opinion service");
      }
    );
  }

  /** DELETE: delete the hero from the server */
  deleteOpinion (opinion: Opinion | number): Observable<Opinion> {
    const id = typeof opinion === 'number' ? opinion : opinion.id;
    const url = `${this.AllOpinionUrl}/${id}`;

    return this.http.delete<Opinion>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted opinion id=${id}`)),
      catchError(this.handleError<Opinion>('deleteOpinion'))
    );
  }

  /** PUT: update the hero on the server */
  updateOpinion (opinion: Opinion): Observable<any> {
    return this.http.put(this.AllOpinionUrl, opinion, httpOptions).pipe(
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
