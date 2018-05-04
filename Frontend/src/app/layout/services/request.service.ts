import { Injectable } from '@angular/core';
import {  InboxRequest  } from '../models/inboxrequest';
import {  Observable  } from 'rxjs/Observable';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import {  catchError, map, tap  } from 'rxjs/operators';
import {  MessageService  } from './message.service';
import {  Mail  } from '../models/mail';
import {  SpecificRequest } from '../models/specific_request';

import { of } from 'rxjs/observable/of';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RequestService {
  private AllRequestUrl = 'http://localhost:3000/requests';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  /** GET Request from the server */
  getAllRequest (): Observable<InboxRequest[]> {
    return this.http.get<InboxRequest[]>(this.AllRequestUrl);
  }

  getRequest(id: number): Observable<InboxRequest> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<InboxRequest>(this.AllRequestUrl + '/' + id);
  }

  //////// Save methods //////////

  /** POST: add a new mail to the server */
  addRequest (request): Observable<SpecificRequest> 
  {
    console.log("in addRequest service")
    return this.http.post<SpecificRequest>(this.AllRequestUrl, request, httpOptions).
    map(
      result => {
        console.log("add Resquest service sucessful")
        // console.log(localStorage.getItem('token'))
        return result;
      },
      err => {
        alert("Error in add REquesr service")
        console.log("Error occured  in add REquesr service");
      }
    );
  }
  /** PUT: update the request on the server validate answer */
  updateRequest (request, id: string): Observable<any> {
    return this.http.put(this.AllRequestUrl + '/' + id, request, httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${request.id}`)),
      catchError(this.handleError<any>('updateRequest'))
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
