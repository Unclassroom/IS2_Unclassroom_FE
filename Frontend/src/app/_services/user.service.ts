import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models/index';

@Injectable()
export class UserService {
    
    configUrl = 'http://localhost:3000/';
    
    constructor(private http: HttpClient) { }

    create(user: User) {
        return this.http.post(this.configUrl+'/users/create', 
        {
            "username": user.username,
            "email": user.email,
            "password": user.password,
            "password_confirmation": user.password_confirmation
        })
        .map(
            result => {
              
              console.log(result)
              console.log("user create")
              return result;
            },
            err => {
              console.log("NO user create");
            }
          );
    }

    create_social(user: User) {
        console.log(user)
        return this.http.post(this.configUrl+'/social_auth', 
        {
            "username": user.username,
            "email": user.email
        })
        .map(
            result => 
            {
                console.log("user create")
                return result;
            },
            err => {
              console.log("NO user create");
            }
          );
    }

}