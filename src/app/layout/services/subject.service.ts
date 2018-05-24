import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject} from '../models/subject';
import {catchError, tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class SubjectService {

  private _Url = 'http://localhost:3000/subjects';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET faculties from the server */
  getSubjects (): Observable<Subject[]> {
    return this.http.get<Subject[]>(this._Url);
  }
  /** GET hero by id. Will 404 if id not found */
  getSubject(id: number): Observable<Subject> {
    const url = `${this._Url}/${id}`;
    return this.http.get<Subject>(url).pipe(
      tap(_ => this.log(`fetched Subject id=${id}`)),
      catchError(this.handleError<Subject>(`getSubject id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addSubject (subject): Observable<Subject> {
    return this.http.post<Subject>(this._Url, subject, httpOptions).pipe(
      tap(_ => this.log(`added faculty w/ id=${subject}`)),
      catchError(this.handleError<Subject>('addSubject'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteSubject (subject: Subject | number): Observable<Subject> {
    const id = typeof subject === 'number' ? subject : subject.id;
    const url = `${this._Url}/${id}`;

    return this.http.delete<Subject>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted subject id=${id}`)),
      catchError(this.handleError<Subject>('deleteSubject'))
    );
  }

  /** PUT: update the hero on the server */
  updateSubject (subject: Subject): Observable<any> {
    return this.http.put(this._Url, subject, httpOptions).pipe(
      tap(_ => this.log(`updated subject id=${subject.id}`)),
      catchError(this.handleError<any>('updateFaculty'))
    );
  }


  private log(message: string) {
    this.messageService.add('SubjectService: ' + message);
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
