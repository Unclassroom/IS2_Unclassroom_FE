import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {MessageService} from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {TypeClassroom} from '../models/type-classroom';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class TypeClassroomService {


  private _Url = 'http://localhost:3000/type_classrooms';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET TypeClassroom from the server */
  getTypesClassroom (): Observable<TypeClassroom[]> {
    return this.http.get<TypeClassroom[]>(this._Url);
  }
  /** GET hero by id. Will 404 if id not found */
  getTypeClassroom(id: number): Observable<TypeClassroom> {
    const url = `${this._Url}/${id}`;
    return this.http.get<TypeClassroom>(url).pipe(
      tap(_ => this.log(`fetched Subject id=${id}`)),
      catchError(this.handleError<TypeClassroom>(`getSubject id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addTypeClassroom (typeclassroom): Observable<TypeClassroom> {
    return this.http.post<TypeClassroom>(this._Url, typeclassroom, httpOptions).pipe(
      tap(_ => this.log(`added typeClassroom w/ id=${typeclassroom}`)),
      catchError(this.handleError<TypeClassroom>('addTypeClassroom'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteTypeClassroom (typeclassroom: TypeClassroom | number): Observable<TypeClassroom> {
    const id = typeof typeclassroom === 'number' ? typeclassroom : typeclassroom.id;
    const url = `${this._Url}/${id}`;

    return this.http.delete<TypeClassroom>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted typeclassroom id=${id}`)),
      catchError(this.handleError<TypeClassroom>('deleteTypeClassroom'))
    );
  }

  /** PUT: update the hero on the server */
  updateTypeClassroom (typeclassroom: TypeClassroom): Observable<any> {
    return this.http.put(this._Url, typeclassroom, httpOptions).pipe(
      tap(_ => this.log(`updated subject id=${typeclassroom.id}`)),
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
