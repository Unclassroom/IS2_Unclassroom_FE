import {  Component, OnInit, Output, EventEmitter, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {  Router } from '@angular/router';
import {  Angular2TokenService} from 'angular2-token';
import {  RouterModule, Routes } from '@angular/router';
import {  FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { ISession } from '../redux/session';
import { ADD_SESSION } from '../redux/actions';

interface Token {
  "jwt": string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  frmLogin: FormGroup;

  signInUser = {
    email: '',
    password: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  token :string;
  configUrl = 'http://localhost:3000/';
  result:Object;
  constructor(
    private authToken: Angular2TokenService,
    private ngRedux: NgRedux<AppState>,
    private fb: FormBuilder,
    private http: HttpClient
  ) 
  {
    this.frmLogin = this.fb.group({
      'email':    ['', Validators.email],
      'password': ['', Validators.required]
    })
    this.http = http;
  }
  
  ngOnInit() {}

  onSignInSubmit() {
    this.getToken();
    var user = localStorage.getItem("currentUser");
    console.log(user)
    // this.signIn();
  }

  getToken()
  {
    const req = this.http.post<Token>(this.configUrl+'/user_token', {
      "auth":{
        "email": this.signInUser.email,
        "password": this.signInUser.password
      }
    })
      .subscribe(
        result => {
          this.result = result.jwt;
          this.token = result.jwt;
          this.signIn();

        },
        err => {
          console.log("Error occured");
        }
      );
    
  }
  signIn() {
    // console.log(this.token);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Baerer '+this.token
      })
    };
       
    const req = this.http.get(this.configUrl+'users/current', httpOptions)
      .subscribe(
        result => {
          // this.result = result;
          // console.log(result);
          localStorage.setItem('currentUser', JSON.stringify(result));
        //   if (result) {
        //     // store user details and jwt token in local storage to keep user logged in between page refreshes
        //     localStorage.setItem('currentUser', JSON.stringify(result));
        // }

        return result;
        },
        err => {
          console.log("Error occured");
        }
      );
  }
 
  // onSignInSubmit() 
  // {
  //   this.authToken.signIn(this.signInUser).subscribe(
  //       res => {
  //         if ( res.status === 200 ) {
  //           console.log('auth response:', res);
  //           console.log('auth response headers: ', res.headers.toJSON()); // log the response header to show the auth token
  //           console.log('auth response body:', res.json()); // log the response body to show the user
  //           this.onFormResult.emit({signedIn: true, res});
  //         }
  //       },
  //       err => {
  //         console.error('auth error:', err);
  //         console.log('err:', err);
  //         this.onFormResult.emit({signedIn: false, err});
  //       }
  //   );
  // }
}
