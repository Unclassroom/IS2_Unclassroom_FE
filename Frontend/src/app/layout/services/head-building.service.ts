import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {Headbuildingonfaculty} from '../models/headbuildingonfaculty';

@Injectable()
export class HeadBuildingService {
  private headBuildingGeneralUrl = 'http://localhost:3000/all_head_buildings';  // URL to web api

  constructor(
    private http: HttpClient) { }

  /** GET HeadBuilding from the server */
  getHeadBuildingsGeneral (): Observable<Headbuildingonfaculty[]> {
    return this.http.get<Headbuildingonfaculty[]>(this.headBuildingGeneralUrl);
  }

}
