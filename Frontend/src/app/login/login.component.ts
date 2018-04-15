import {  Component, OnInit, Output, EventEmitter, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {  Router } from '@angular/router';
import {  Angular2TokenService} from 'angular2-token';
import {  RouterModule, Routes } from '@angular/router';
import {  FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';

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

  token :string;
  configUrl = 'http://localhost:3000/';
  result:Object; 

  @Output() onFormResult = new EventEmitter<any>();
  // constructor(public router: Router) {}
  // constructor(tokenAuthService: Angular2TokenService,  router: Router) {
  //   if ( tokenAuthService.userSignedIn() ) {
  //     router.navigate(['layout']);
  //   }
  //  }
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
    this.signIn();
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
          console.log(this.token);
        },
        err => {
          console.log("Error occured");
        }
      );
  }
  signIn() {}
 
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
