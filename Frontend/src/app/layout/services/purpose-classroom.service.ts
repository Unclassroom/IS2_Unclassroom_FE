import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {PurposeClassroom} from '../models/purpose-classroom';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class PurposeClassroomService {


  private _Url = 'http://localhost:3000/purpose_classrooms';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET faculties from the server */
  getPurposesClassroom (): Observable<PurposeClassroom[]> {
    return this.http.get<PurposeClassroom[]>(this._Url);
  }
  /** GET hero by id. Will 404 if id not found */
  getPurposeClassroom(id: number): Observable<PurposeClassroom> {
    const url = `${this._Url}/${id}`;
    return this.http.get<PurposeClassroom>(url).pipe(
      tap(_ => this.log(`fetched purposeclassroom id=${id}`)),
      catchError(this.handleError<PurposeClassroom>(`getPurposeClassroom id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addPurposeClassroom (purposeclassroom): Observable<PurposeClassroom> {
    return this.http.post<PurposeClassroom>(this._Url, purposeclassroom, httpOptions).pipe(
      tap(_ => this.log(`added purposeclassroom w/ id=${purposeclassroom}`)),
      catchError(this.handleError<PurposeClassroom>('addPurposeClassroom'))
    );
  }

  /** DELETE: delete the hero from the server */
  deletePurposeClassroom (purposeclassroom: PurposeClassroom | number): Observable<PurposeClassroom> {
    const id = typeof purposeclassroom === 'number' ? purposeclassroom : purposeclassroom.id;
    const url = `${this._Url}/${id}`;

    return this.http.delete<PurposeClassroom>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted purposeclassroom id=${id}`)),
      catchError(this.handleError<PurposeClassroom>('deletePurposeClassroom'))
    );
  }

  /** PUT: update the hero on the server */
  updatePurposeClassroom (purposeclassroom: PurposeClassroom): Observable<any> {
    return this.http.put(this._Url, purposeclassroom, httpOptions).pipe(
      tap(_ => this.log(`updated purposeclassroom id=${purposeclassroom.id}`)),
      catchError(this.handleError<any>('updatePurposeClassroom'))
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
