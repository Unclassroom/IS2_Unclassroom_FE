import { Component, OnInit } from '@angular/core';
import {RequestService} from '../services/request.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent implements OnInit {
  request: any = {
    id: '',
    name: '',
    head_building_id: '',
    faculty_id: '',
    number: ''
  }
  constructor(private requestService: RequestService, private router:Router) { }

  ngOnInit() {
  }

}
