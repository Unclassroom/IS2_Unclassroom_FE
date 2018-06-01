import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Router } from '@angular/router';
import { Angular2TokenService} from 'angular2-token';
import { NgRedux } from '@angular-redux/store';

import { UserService } from '../_services/index';
import { AuthenticationService } from '../_services/index';
import {  HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/index';
import Swal from 'sweetalert2';

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
          this.token = JSON.parse(localStorage.getItem('token'));
          if (this.token == "-1"){
            //user already exists
            Swal('Oops...', 'Usuario ya existe!', 'error')
            this.loading = false;
          }else{
            this.authenticationService.login(this.token)
            .subscribe(
              data =>
              {
                this.user = JSON.parse(localStorage.getItem('currentUser'))
                this.user.first_name = this.model.first_name
                this.user.last_name = this.model.last_name
                this.userService.createTypeUser(this.user, "student")
                .subscribe(
                  type =>
                  {
                    console.log("Create type user")
                  },
                  error =>
                  {
                    Swal('Oops...', 'Error en el servidor!', 'error')
                    this.loading = false;
                });
                localStorage.setItem('currentUser', JSON.stringify(this.user));
                this.router.navigate(["/layout"]);
                this.loading = false
              },
              error =>
              {
                Swal('Oops...', 'Error en el servidor!', 'error')
                this.loading = false;
              }
            );
          }
        },
        error => {
          Swal('Oops...', 'Error en el servidor!', 'error')
          this.loading = false;
        });
  }
}
