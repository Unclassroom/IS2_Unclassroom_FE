import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Angular2TokenService} from "angular2-token";

import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { ISession } from '../redux/session';
import { ADD_SESSION } from '../redux/actions';
import {UsuariosService} from '../usuarios.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ngRedux: NgRedux<AppState>,private tokenAuthSerivce:Angular2TokenService) { }

  ngOnInit() {
  }


  signUpUser = {
    email: '',
    password: '',
    passwordConfirmation: ''
  };

  @Output() onFormResult = new EventEmitter<any>();

  onSignUpSubmit(){

    this.tokenAuthSerivce.registerAccount(this.signUpUser).subscribe(

      (res) => {

        if (res.status == 200){
          this.onFormResult.emit({signedUp: true, res})
        }

      },

      (err) => {
        console.log(err.json())
        this.onFormResult.emit({signedUp: false, err})
      }
    )

  }

}
