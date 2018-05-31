import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Report } from '../models/report';
import { MessageService } from './message.service';
import {Opinion} from '../models/opinion';
import {UrloriginService} from './urlorigin.service';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ReportService {
  private _Url = this.urloriginService.getUrl('reports');
  private _UrlPages = this.urloriginService.getUrl('reports_pages');

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private urloriginService: UrloriginService) { }

  /** GET reports from the server */
  getReports(): Observable<Report[]> {
    return this.http.get<Report[]>(this._Url);
  }
  /** GET hero by id. Will 404 if id not found */
  getReport(id: number): Observable<Report> {
    const url = `${this._Url}/${id}`;
    return this.http.get<Report>(url).pipe(
      tap(_ => this.log(`fetched report id=${id}`)),
      catchError(this.handleError<Report>(`getReport id=${id}`))
    );
  }
  getReportsPagination (id: number): Observable<Report[]> {
    return this.http.get<Report[]>(this._Url + '?page=' + id);
  }

  getPagination (id: number): Observable<Report[]> {
    return this.http.get<Report[]>(this._Url + '?page=' + id);
  }

  getPages (): Observable<number> {
    return this.http.get<number>(this._UrlPages);
  }
  //////// Save methods //////////


  /** POST: add a new report to the server */
  addReport (report: any) {
    console.log("in addRequest service")
    return this.http.post(this._Url,
    {
      "description": report.description,
      "building_id": report.building_id,
      "classroom_id": report.classroom_id,
      "image": report.image
    }
    )
    .map(
      result => {
        console.log("add Report service sucessful")
        return result;
      },
      err => {
        alert("Error in add report service")
        console.log("Error in add report service");
      }
    );
  }

  /** DELETE: delete the report from the server */
  deleteReport (report: Report | number): Observable<Report> {
    const id = typeof report === 'number' ? report : report.id;
    const url = `${this._Url}/${id}`;

    return this.http.delete<Report>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted report id=${id}`)),
      catchError(this.handleError<Report>('deleteReport'))
    );
  }

  /** PUT: update the report on the server */
  updateReport (report: Report): Observable<any> {
    return this.http.put(this._Url, report, httpOptions).pipe(
      tap(_ => this.log(`updated report id=${report.id}`)),
      catchError(this.handleError<any>('updateReport'))
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
