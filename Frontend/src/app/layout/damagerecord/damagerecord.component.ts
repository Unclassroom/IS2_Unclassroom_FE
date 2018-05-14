import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-damagerecord',
  templateUrl: './damagerecord.component.html',
  styleUrls: ['./damagerecord.component.css']
})
export class DamagerecordComponent implements OnInit {

  constructor(private requestService: RequestService, private router:Router) { }

  ngOnInit() {
  }

}


