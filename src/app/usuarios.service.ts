///<reference path="../../node_modules/angular2-token/angular2-token.service.d.ts"/>
import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {Angular2TokenService} from 'angular2-token';
import 'rxjs/add/operator/map';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UsuariosService {

  userSignedIn$: Subject<boolean> = new Subject();
  constructor(
    public usuariosService: Angular2TokenService) {

    this.usuariosService.validateToken().subscribe(
      res => res.status === 200 ? this.userSignedIn$.next(res.json().success) : this.userSignedIn$.next(false)
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */

  registerUser(signUpData:  {email: string, password: string, passwordConfirmation: string}): Observable<Response> {
    return this.usuariosService.registerAccount(signUpData).map(
      res => {
        this.userSignedIn$.next(true);
        return new Response;
      }
    );
  }
}
