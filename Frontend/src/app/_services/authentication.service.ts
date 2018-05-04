import { Injectable } from '@angular/core';
import {  Router, RouterModule, Routes,  ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import { User } from '../_models/index';

interface Token {
  "jwt": string;
}

@Injectable()
export class AuthenticationService {

  configUrl = 'http://localhost:3000/';
  
  returnUrl: string;
  tok:string;
  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  getToken(email: string, password: string)
  {
    return this.http.post<Token>(this.configUrl+'/user_token', {
      "auth":{
        "email": email,
        "password": password
      }
    })
      .map(
        result => {
          
          this.tok = result.jwt;
          // console.log(this.tok)
          localStorage.setItem('token', JSON.stringify(result.jwt));
          // console.log(localStorage.getItem('token'))
          return result;
        },
        err => {
          alert("sin token")
          console.log("Error occured");
        }
      );
    
  }

  getTokenSocial(endpoint: string)
  {
    console.log(this.configUrl+'social_auth/'+endpoint);
    return this.http.get<Token>(this.configUrl+'social_auth/'+endpoint)
      .subscribe(
        token => {
          if (token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            console.log('supuestamente solo jwt'+token.jwt);
            localStorage.setItem('token', JSON.stringify(token.jwt));
          }
          return token;
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  login(token: string) 
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Baerer '+ token
      })
    };
    return this.http.get<User>(this.configUrl+'users/current', httpOptions)
      .map(
        result => {
          if (result) {
            // console.log(result)
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(result));
          }
          return result;
        },
        err => {
          console.log("Error occured");
        }
      );
  }

  logout() 
  {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }
}
