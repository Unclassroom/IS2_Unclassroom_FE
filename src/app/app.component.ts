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
  title = 'app works!';
  constructor(private authToken: Angular2TokenService){


  }

}

