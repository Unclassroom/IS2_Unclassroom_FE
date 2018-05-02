import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService} from 'angular2-token';
import { NgRedux } from '@angular-redux/store';

import { UserService } from '../_services/index';
import { AuthenticationService } from '../_services/index';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/index';

interface Token {
  "jwt": string;
}
@Component({
  moduleId: module.id,
  selector: 'app-register',
  templateUrl: './register.component.html', 
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  model: any = {};
  loading = false;
  user: User;
  @Output() onFormResult = new EventEmitter<any>();
  token :string;
  configUrl = 'http://localhost:3000/';
  constructor(
    private tokenAuthSerivce: Angular2TokenService,
    private userService: UserService,
    private router: Router,
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) 
  {
    let passlengt= this.signUpUser.password.length;
  }
  ngOnInit() {}

  passShort(passlengt){  
    return passlengt<=8  
  }

  passLong(passlengt){ 
    if (passlengt<16)
      return false 
    else return true  
  }

  register() {
    this.loading = true;
    this.model.role = "student"
    this.userService.createUser(this.model)
      .subscribe(
        tok => {
          console.log(this.model)
          this.token = JSON.parse(localStorage.getItem('token'));
          console.log(this.token)
          if (this.token == "-1"){
            //user already exists
            // it is necessary validate more beatiful this error
            console.log("user already exists");
            alert("user already exist")
          }else{
            this.authenticationService.login(this.token)
            .subscribe(
              data => 
              {
                this.user = JSON.parse(localStorage.getItem('currentUser'))
                this.user.first_name = this.model.first_name
                this.user.last_name = this.model.last_name
                // console.log(this.user)
                // console.log(this.model)
                this.userService.createTypeUser(this.user, "student")
                .subscribe(
                  type => 
                  {
                    console.log("Create type user")  
                  },
                  error =>
                  {
                    console.log("Error ocurred in create type user")
                });
                localStorage.setItem('currentUser', JSON.stringify(this.user));
                this.router.navigate(["/layout"]);
                this.loading = true;
                console.log(this.loading)
              },
              error => 
              {
                console.log("Error occured");
                this.loading = false;
              }
            );
          }
        },
        error => {
          this.loading = false;
        });
  }
}