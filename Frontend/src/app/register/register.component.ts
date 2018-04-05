import { Component, OnInit } from '@angular/core';
import {Angular2TokenService} from "angular2-token";

import { NgRedux } from '@angular-redux/store';
import { AppState } from '../redux/store';
import { ISession } from '../redux/session';
import { ADD_SESSION } from '../redux/actions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
  }

}
