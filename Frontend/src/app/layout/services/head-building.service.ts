import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Headbuildingonfaculty} from '../models/headbuildingonfaculty';
import {UrloriginService} from './urlorigin.service';

@Injectable()
export class HeadBuildingService {
  private headBuildingGeneralUrl =  this.urloriginService.getUrl('all_head_buildings');  // URL to web api

  constructor(
    private http: HttpClient,
    private urloriginService: UrloriginService) { }

  /** GET HeadBuilding from the server */
  getHeadBuildingsGeneral (): Observable<Headbuildingonfaculty[]> {
    return this.http.get<Headbuildingonfaculty[]>(this.headBuildingGeneralUrl);
  }

}
