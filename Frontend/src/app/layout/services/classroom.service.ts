import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Classroom } from '../models/classroom';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ClassroomService {

  private _Url = 'http://localhost:3000/building_classrooms/';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET faculties from the server */
  getClassrooms (building_id: number): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(this._Url + building_id);
  }


  getClassroom(id: number): Observable<Classroom[]> {
    const url = `${this._Url}/${id}`;
    return this.http.get<Classroom[]>(url).pipe(
      tap(_ => this.log(`fetched Classroom id=${id}`)),
      catchError(this.handleError<Classroom[]>(`getClassroom id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addClassroom (Classroom): Observable<Classroom> {
    return this.http.post<Classroom>(this._Url, Classroom, httpOptions).pipe(
      tap(_ => this.log(`added Classroom w/ id=${Classroom}`)),
      catchError(this.handleError<Classroom>('addClassroom'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteClassroom (Classroom: Classroom | number): Observable<Classroom> {
    const id = typeof Classroom === 'number' ? Classroom : Classroom.id;
    const url = `${this._Url}/${id}`;

    return this.http.delete<Classroom>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Classroom id=${id}`)),
      catchError(this.handleError<Classroom>('deleteClassroom'))
    );
  }

  /** PUT: update the hero on the server */
  updateClassroom (Classroom: Classroom): Observable<any> {
    return this.http.put(this._Url, Classroom, httpOptions).pipe(
      tap(_ => this.log(`updated Classroom id=${Classroom.id}`)),
      catchError(this.handleError<any>('updateClassroom'))
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


