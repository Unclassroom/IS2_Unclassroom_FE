import { Component, OnInit } from '@angular/core';
import {Subject} from '../models/subject';
import {TypeClassroom} from '../models/type-classroom';
import {SubjectService} from '../services/subject.service';
import {TypeClassroomService} from '../services/type-classroom.service';

@Component({
  selector: 'app-requestbag',
  templateUrl: './requestbag.component.html',
  styleUrls: ['./requestbag.component.css']
})
export class RequestbagComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
