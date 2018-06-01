import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Headbuildingonfaculty} from '../models/headbuildingonfaculty';
import {UrloriginService} from './urlorigin.service';
import {Faculty} from '../models/faculty';

@Injectable()
export class HeadBuildingService {
  private headBuildingGeneralUrl =  this.urloriginService.getUrl('all_head_buildings');  // URL to web api
  private _UrlPages = this.urloriginService.getUrl('reports_pages');

  constructor(
    private http: HttpClient,
    private urloriginService: UrloriginService) { }

  /** GET HeadBuilding from the server */
  getHeadBuildingsGeneral (): Observable<Headbuildingonfaculty[]> {
    return this.http.get<Headbuildingonfaculty[]>(this.headBuildingGeneralUrl);
  }

  getPagination (id: number): Observable<Headbuildingonfaculty[]> {
    return this.http.get<Headbuildingonfaculty[]>(this.headBuildingGeneralUrl + '?page=' + id);
  }

  getPages (): Observable<number> {
    return this.http.get<number>(this._UrlPages);
  }

}
