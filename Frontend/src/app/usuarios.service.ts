import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class UsuariosService {

  constructor(
    private http: HttpClient) { }




}
