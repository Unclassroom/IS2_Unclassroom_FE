import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

interface Token {
  "jwt": string;
}

@Injectable()
export class AuthenticationService {

  configUrl = 'http://localhost:3000/';
  
  returnUrl: string;
  tok:string;
  constructor(private http: HttpClient) { }

  getToken(email: string, password: string)
  {
    return this.http.post<Token>(this.configUrl+'/user_token', {
      "auth":{
        "email": email,
        "password": password
      }
    })
      .map(
        result => {
          
          this.tok = result.jwt;
          // console.log(this.tok)
          localStorage.setItem('token', JSON.stringify(result.jwt));
          // console.log(localStorage.getItem('token'))
          return result;
        },
        err => {
          alert("sin token")
          console.log("Error occured");
        }
      );
    
  }

  login(token: string) 
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': 'Baerer '+ token
      })
    };

    console.log(token)

    return this.http.get(this.configUrl+'users/current', httpOptions)
      .map(
        result => {
          if (result) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            console.log(result);
            localStorage.setItem('currentUser', JSON.stringify(result));
          }
          return result;
        },
        err => {
          console.log("Error occured");
        }
      );
    
  }

  // const req = this.http.post<Token>(this.configUrl+'/user_token', {
  //   "auth":{
  //     "email": this.signInUser.email,
  //     "password": this.signInUser.password
  //   }
  // })
  //   .subscribe(
  //     result => {
  //       this.result = result.jwt;
  //       this.token = result.jwt;
  //       this.signIn();

  //     },
  //     err => {
  //       console.log("Error occured");
  //     }
  //   );



  logout() 
  {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  }

}
