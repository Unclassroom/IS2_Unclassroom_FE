import {  Component, OnInit, Output, EventEmitter, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {  Angular2TokenService} from 'angular2-token';
import {  Router, RouterModule, Routes,  ActivatedRoute } from '@angular/router';
import {  FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {  BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {  HttpClient, HttpHeaders } from '@angular/common/http';

import { NgRedux } from '@angular-redux/store';

// Social login
import { AuthService, FacebookLoginProvider,GoogleLoginProvider} from 'angular5-social-login';

import { AuthenticationService } from '../_services/index';
import { UserService } from '../_services/index';

interface Token {
  "jwt": string;
}
interface UserCreate {
  "id": number;
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
  };
  clickscnt=0;
  loading = false;
  returnUrl: string;
  clickstwo: boolean;
  constructor(
  //  private ngRedux: NgRedux<AppState>,
    private fb: FormBuilder,
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private socialAuthService: AuthService,
    private userService: UserService
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

  socialSignIn(socialPlatform : string) {
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
        this.loading = true;
        this.model.email = userData.email
        this.model.username = userData.name
        console.log(" the model is : " , this.model);
        this.userService.create_social(this.model)
          .subscribe(
            data => {
              localStorage.setItem('number_user', Object.values(data)[0] )
              console.log('data array'+Object.values(data)[0])
              this.authenticationService.getTokenSocial(localStorage.getItem('number_user'))
              console.log('user service token'+localStorage.getItem('token'))
              this.token = JSON.parse(localStorage.getItem('token'));
              const httpOptions = {
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': 'Baerer '+ this.token
                })
              }
              console.log('before test');
              this.http.get(this.configUrl+'/users/current', httpOptions)
              .subscribe(
                result => {
                  // if (result) {
                  //   // store user details and jwt token in local storage to keep user logged in between page refreshes
                  //   console.log(result);
                  //   localStorage.setItem('currentUser', JSON.stringify(result));
                  // }
                  console.log(result);
                  localStorage.setItem('currentUser', JSON.stringify(result));
                  this.router.navigate(["/layout"]);
                },
                err => {
                  console.log("Error occured");
                }
            );
            },
            error => {
              this.loading = false;
            });
          // console.log('final token'+this.token)
          // console.log('current user'+localStorage.getItem('currentUser'))
      }
    );
  }

  socialLogin(){
    console.log("algo")
    console.log(localStorage.getItem('number_user'))
    this.http.get('http://localhost:3000/social_auth/3')
    .subscribe(
      data => {
        if (data) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          console.log(data);
          localStorage.setItem('token', JSON.stringify(data));
        }
        console.log(data);
      },
      err => {
        console.log("Error occured");
      }
  );
  }

  login() {
    console.log("into login")
    console.log(this.clickscnt)
    this.clickscnt+=1
    this.authenticationService.getToken(this.model.email, this.model.password)
      .subscribe(
        token =>{
          console.log(token)
        },
        error =>{
          console.log("Error occured");
        }
      );
    // console.log("after service")
    // console.log(localStorage.getItem('token'))
    this.token = JSON.parse(localStorage.getItem('token'));
    this.authenticationService.login(this.token)
      .subscribe(
        data => {
          this.router.navigate(["/layout"]);
          this.loading = true;
          console.log(this.loading)
          if (this.clickscnt>=2){
            this.clickstwo=true;
          }
        },
        error => {
          if (this.clickscnt>=2){
            this.clickstwo=true;
          }
          console.log("Error occured");
          this.loading = false;
          console.log(this.loading)
        }
      );
  }
}
