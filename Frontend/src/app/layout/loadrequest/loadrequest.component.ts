import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-loadrequest',
  templateUrl: './loadrequest.component.html',
  styleUrls: ['./loadrequest.component.css']
})
export class LoadrequestComponent implements OnInit {

  constructor(private router:Router) {   }
 
  ngOnInit() {
  }
}