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
import {Event} from '../models/event';
import {UrloriginService} from './urlorigin.service';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RequestService {

  private AllRequestUrl = this.urloriginService.getUrl('requests');// URL to web api
  private requestByUserUrl = this.urloriginService.getUrl('teacher_requests');
  private DataRequestByPurposesUrl = this.urloriginService.getUrl('request_count_by_purpose'); // URL to web api
  private DataRequestByStateUrl = this.urloriginService.getUrl('request_count_by_state'); // URL to web api
  private DataRequestByMonthUrl = this.urloriginService.getUrl('request_count_by_month'); // URL to web api
  private DataRequestByPurposesUrlFiltered = this.urloriginService.getUrl('request_count_by_purpose');  // URL to web api
  private _UrlPages = this.urloriginService.getUrl('requests_pages');

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private urloriginService: UrloriginService) { }


  /** GET Request from the server */
  getAllRequest (): Observable<InboxRequest[]> {
    return this.http.get<InboxRequest[]>(this.AllRequestUrl);
  }

  getRequestByUser (user_id): Observable<InboxRequest[]> {
    return this.http.get<InboxRequest[]>(this.requestByUserUrl+"/"+ user_id);
  }
  getPagination (id: number): Observable<InboxRequest[]> {
    return this.http.get<InboxRequest[]>(this.AllRequestUrl + '?page=' + id);
  }

  getPages (): Observable<number> {
    return this.http.get<number>(this._UrlPages);
  }

  // getDataRequestByPurposes_Filtered (): Observable<Response> {
  //   return this.http.get<Response>(this.DataRequestByPurposesUrlFiltered);
  // }
  getDataRequestByPurposes_Filtered (model: any): Observable<Response> {
    return this.http.get<Response>(this.DataRequestByPurposesUrlFiltered + '?end_date=' + model.end_date + '&begin_date=' +  model.begin_date);
  }

  /** GET Request from the server */
   getDataRequestByPurposes (): Observable<Response> {
    return this.http.get<Response>(this.DataRequestByPurposesUrl);
  }


  /** GET Request from the server */
  getDataRequestByState (): Observable<Response> {
    return this.http.get<Response>(this.DataRequestByStateUrl);
  }


  /** GET Request from the server */
  getDataRequestByMonth (): Observable<Response> {
    return this.http.get<Response>(this.DataRequestByMonthUrl);
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
