import { Component, OnInit } from '@angular/core';
import {PurposeClassroom} from '../models/purpose-classroom';
import {PurposeClassroomService} from '../services/purpose-classroom.service';

@Component({
  selector: 'app-purpose-classroom',
  templateUrl: './purpose-classroom.component.html',
  styleUrls: ['./purpose-classroom.component.css']
})
export class PurposeClassroomComponent implements OnInit {
  purposesclassroom: PurposeClassroom[];

  constructor(private purposeClassroomService: PurposeClassroomService) { }

  ngOnInit() {
    this.getPurposesClassroom();
  }

  getPurposesClassroom(): void {
    this.purposeClassroomService.getPurposesClassroom()
      .subscribe(purposesclassroom => this.purposesclassroom = purposesclassroom);

  }

}
