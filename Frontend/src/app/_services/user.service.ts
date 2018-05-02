import { Injectable } from '@angular/core';
import {  Router, RouterModule, Routes,  ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../_models/index';

interface Token {
    "jwt": string;
  }

@Injectable()
export class UserService {
    
    configUrl = 'http://localhost:3000/';
    
    constructor
    (
        private http: HttpClient,
    private router: Router,
    ) { }

    createUser(user: User) {
        return this.http.post<Token>(this.configUrl+'/users/create', 
        {
            "username": user.username,
            "email": user.email,
            "password": user.password,
            "password_confirmation": user.password_confirmation,
            "role": user.role
        })
        .map(
            result => {
              
              console.log(result)
              console.log("user create")
              localStorage.setItem('token', JSON.stringify(result.jwt));
              return result;
            },
            err => {
              console.log("NO user create");
            }
          );
    }
    createTypeUser(user: User,type: string) {
        console.log(user.username)
        // console.log(user.name)
        return this.http.post<User>(this.configUrl+type+'s', 
        {
            "first_name": user.first_name,
            "last_name": user.last_name,
            "user_id": user.id
        })
        .map(
            result => {
                // localStorage.setItem('currentUser', JSON.stringify(result));
                return result;
            },
            err => {
                console.log("NO Type user create");
            }
          );
    }
    
    create_social(user: User) {
        // console.log(user)
        return this.http.post<Token>(this.configUrl+'/social_auth', 
        {
            "username": user.username,
            "email": user.email,
            "role": user.role
        })
        .map(
            result => 
            {
                //this result can be Object token, Message :"user doesn create", Object token
                // it is necessarry add validation in login componente in social sign in
                return result;
            },
            err => {
              console.log("front error create social");
            }
          );
    }

}