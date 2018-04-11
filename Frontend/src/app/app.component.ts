import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Angular2TokenService} from 'angular2-token';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
//implements OnInit
{
  // subjects = [];
  // constructor(private http:HttpClient) {
  //   this.getUsers();
  // }

  // getUsers() {
  //   // this.http.get('http://localhost:3000/users')
  //   //          .subscribe(res => {
  //   //            this.users = res.json().users;
  //   //          });
  //   return this.http.get('http://localhost:3000/subjects');
  // }
  title = 'app works!';
  constructor(private authToken: Angular2TokenService){
    this.authToken.init(environment.token_auth_config);

  //   this.authToken.signIn({email: "user@example.com", password: "monkey67"}).subscribe(

  //     res => {

  //       console.log('auth response:', res);
  //       console.log('auth response headers: ', res.headers.toJSON()); //log the response header to show the auth token
  //       console.log('auth response body:', res.json()); //log the response body to show the user
  //     },

  //     err => {
  //       console.error('auth error:', err);
  //     }
  // )
  }
  // ngOnInit() {

}

