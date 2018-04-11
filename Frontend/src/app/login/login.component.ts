import {Component, OnInit, Output, EventEmitter, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import { Router } from '@angular/router';
import {Angular2TokenService} from 'angular2-token';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { ISession } from '../redux/session';
import { ADD_SESSION } from '../redux/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  signInUser = {
    email: '',
    password: ''
  };


  @Output() onFormResult = new EventEmitter<any>();
  // constructor(public router: Router) {}
  // constructor(tokenAuthService: Angular2TokenService,  router: Router) {
  //   if ( tokenAuthService.userSignedIn() ) {
  //     router.navigate(['layout']);
  //   }
  //  }
  constructor(private authToken: Angular2TokenService, private ngRedux: NgRedux<AppState>) { }
  ngOnInit() {}
  onSignInSubmit() {
    this.authToken.signIn(this.signInUser).subscribe(
        res => {
          console.log('auth response:', res);
          console.log('auth response headers: ', res.headers.toJSON()); // log the response header to show the auth token
           console.log('auth response body:', res.json()); // log the response body to show the user
          if ( res.status === 200 ) {
            console.log('auth response:', res);
            console.log('auth response headers: ', res.headers.toJSON()); // log the response header to show the auth token
            console.log('auth response body:', res.json()); // log the response body to show the user
            this.onFormResult.emit({signedIn: true, res});
          }
        },
        err => {
          console.error('auth error:', err);
          console.log('err:', err);
          this.onFormResult.emit({signedIn: false, err});
        }
    );
  }
  // onLoggedin() {
  //   // ngIf="tokenAuthService.userSignedIn()"
  //   // return 'by pressing ESC';
  //   localStorage.setItem('isLoggedin', 'true');
  // }
}
