import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Building } from '../models/building';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class BuildingService {

  private _Url = 'http://localhost:3000/buildings';
  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET faculties from the server */
  getFaculties (): Observable<Building[]> {
    return this.http.get<Building[]>(this._Url);
  }
  /** GET hero by id. Will 404 if id not found */
  getBuilding(id: number): Observable<Building> {
    const url = `${this._Url}/${id}`;
    return this.http.get<Building>(url).pipe(
      tap(_ => this.log(`fetched Building id=${id}`)),
      catchError(this.handleError<Building>(`getBuilding id=${id}`))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addBuilding (Building): Observable<Building> {
    return this.http.post<Building>(this._Url, Building, httpOptions).pipe(
      tap(_ => this.log(`added Building w/ id=${Building}`)),
      catchError(this.handleError<Building>('addBuilding'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteBuilding (Building: Building | number): Observable<Building> {
    const id = typeof Building === 'number' ? Building : Building.id;
    const url = `${this._Url}/${id}`;

    return this.http.delete<Building>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted Building id=${id}`)),
      catchError(this.handleError<Building>('deleteBuilding'))
    );
  }

  /** PUT: update the hero on the server */
  updateBuilding (Building: Building): Observable<any> {
    return this.http.put(this._Url, Building, httpOptions).pipe(
      tap(_ => this.log(`updated Building id=${Building.id}`)),
      catchError(this.handleError<any>('updateBuilding'))
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

