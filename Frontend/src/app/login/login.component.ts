import {  Component, OnInit, Output, EventEmitter, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {  Angular2TokenService} from 'angular2-token';
import {  Router, RouterModule, Routes,  ActivatedRoute } from '@angular/router';
import {  FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { ISession } from '../redux/session';
import { ADD_SESSION } from '../redux/actions';

// Social login
import { AuthService, FacebookLoginProvider,GoogleLoginProvider} from 'angular5-social-login';

import { AuthenticationService } from '../_services/index';

interface Token {
  "jwt": string;
}

@Component({
  moduleId: module.id,
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
  model: any = {
    email: '',
    password: ''
  };

  loading = false;
  returnUrl: string;
  
  constructor(
    private ngRedux: NgRedux<AppState>,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private socialAuthService: AuthService,
  ) 
  {
    this.frmLogin = this.fb.group({
      'email':    ['', Validators.email],
      'password': ['', Validators.required]
    })
    this.http = http;
  }
  
  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
 
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public socialSignIn(socialPlatform : string) {
    let socialPlatformProvider;
    if(socialPlatform == "facebook")
    {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    }
    else if(socialPlatform == "google")
    {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }
    
    this.socialAuthService.signIn(socialPlatformProvider)
    .then(
      (userData) => 
      {
        console.log(socialPlatform+" sign in data : " , userData);
        this.token = JSON.parse(localStorage.getItem('token'));
    this.authenticationService.login(this.token)
      .subscribe(
        data => {
          this.router.navigate(["/profile"]);
        },
        error => {
          console.log("Error occured");
          this.loading = false;
        }
      );  
      }
    );
  }

  login() {
    this.loading = true;
    this.authenticationService.getToken(this.model.email, this.model.password)
      .subscribe(
        token =>{
          console.log(token)
        },
        error =>{
          console.log("Error occured");
        }
      );
    console.log("after service")
    console.log(localStorage.getItem('token'))
    this.token = JSON.parse(localStorage.getItem('token'));
    this.authenticationService.login(this.token)
      .subscribe(
        data => {
          this.router.navigate(["/profile"]);
        },
        error => {
          console.log("Error occured");
          this.loading = false;
        }
      );
  }
}
