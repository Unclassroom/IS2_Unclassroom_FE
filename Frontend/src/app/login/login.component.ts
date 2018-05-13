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
        let fn = userData.name.split(" ")
        let e = userData.email.split("@")
        this.loading = true;
        this.model.email = userData.email
        this.model.username = e[0]
        this.model.role = "student"
        console.log(this.model)
        this.userService.create_social(this.model)
          .subscribe(
            data => {              
              // Request for currentUser
              localStorage.setItem('token', JSON.stringify(data.jwt));
              this.token = JSON.parse(localStorage.getItem('token'));
              this.authenticationService.login(this.token)
                .subscribe(
                  data => 
                  {
                    // Create type user
                    this.model.first_name = fn[0]
                    this.model.last_name = fn[1]
                    this.model.id = JSON.stringify(data.id)
                    this.userService.createTypeUser(this.model, "student")
                    localStorage.setItem('currentUser', JSON.stringify(this.model));
                    this.router.navigate(["/layout"]);
                  },
                  error => {
                    console.log("Error occured");
                  }
              );
            },
            error => {
              this.loading = false;
            });
      }
    );
  }

  login() {
    this.clickscnt+=1
    this.authenticationService.getToken(this.model.email, this.model.password)
      .subscribe(
        token =>{
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
                }
            );
          },
        error =>{
          console.log("Error occured");
        }
      );
  }
}
