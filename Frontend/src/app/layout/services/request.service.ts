import { Injectable } from '@angular/core';
import {  InboxRequest  } from '../models/inboxrequest';
import {  Observable  } from 'rxjs/Observable';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import {  catchError, map, tap  } from 'rxjs/operators';
import {  MessageService  } from './message.service';
import {  Mail  } from '../models/mail';
import {  SpecificRequest } from '../models/specific_request';
import {RequestPurpose} from '../models/requestpurposes';
import 'rxjs/add/operator/toPromise';

import { of } from 'rxjs/observable/of';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RequestService {

  private AllRequestUrl = 'http://localhost:3000/requests';  // URL to web api
  private DataRequestByPurposesUrl = 'http://localhost:3000/request_count_by_purpose';  // URL to web api
  private DataRequestByStateUrl = 'http://localhost:3000/request_count_by_state';  // URL to web api
  private DataRequestByPurposesUrlFiltered = 'http://localhost:3000/request_count_by_purpose?end_date="03-23-2018"&begin_date="02-23-2017"';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }


  /** GET Request from the server */
  getAllRequest (): Observable<InboxRequest[]> {
    return this.http.get<InboxRequest[]>(this.AllRequestUrl);
  }

  getDataRequestByPurposes_Filtered (): Observable<Response> {
    return this.http.get<Response>(this.DataRequestByPurposesUrlFiltered);
  }

  /** GET Request from the server */
   getDataRequestByPurposes (): Observable<Response> {
    return this.http.get<Response>(this.DataRequestByPurposesUrl);
  }


  /** GET Request from the server */
  getDataRequestByState (): Observable<Response> {
    return this.http.get<Response>(this.DataRequestByStateUrl);
  }


  getRequest(id: number): Observable<InboxRequest> {
    // TODO: send the message _after_ fetching the hero
    return this.http.get<InboxRequest>(this.AllRequestUrl + '/' + id);
  }

  //////// Save methods //////////

  /** POST: add a new mail to the server */
  addRequest (request: any)
  {
    console.log("in addRequest service")
    console.log(request.motive)
    console.log(request.type_request)
  return this.http.post(this.AllRequestUrl, 
    {
      "user_type": request.user_type,
      "user_id":request.user_id,
      "purpose_classroom_id": request.purpose_classroom,
      "type_classroom_id": request.type_classroom,
      "state": "no readed",
      "motive": request.motive,
      "alternatives":
      [
        {
          "type_request": request.type_request,
            "specific": 
            // It is necessary fix this, because an object calling other object doesnt match or it isnt good.
             request.specific.specific
            
        }  
      ]
    }
    )
    .map(
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