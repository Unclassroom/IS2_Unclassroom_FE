import { Component, OnInit } from '@angular/core';
import {Mail} from '../../models/mail';
import {RequestService} from '../../services/request.service';
import {TypeClassroom} from '../../models/type-classroom';
import {TypeClassroomService} from '../../services/type-classroom.service';
import {PurposeClassroom} from '../../models/purpose-classroom';
import {PurposeClassroomService} from '../../services/purpose-classroom.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  request = {
    /*'teacher_id': '21',
    'purpose_classroom_id': '26',
    'type_classroom_id': '17',
    'state': 'pending',
    'external_person_id': '21'*/
  };

  purposesclassroom: PurposeClassroom[];
  typeclassrooms: TypeClassroom[];
  constructor(private requestService: RequestService, private purposeClassroomService: PurposeClassroomService, private typeClassroomService: TypeClassroomService) { }
  ngOnInit() {
    this.getSubjects();
    this.getTypesClassroom();
  }
  add(): void {
    if (!this.request) { return; }
    this.requestService.addRequest(this.request)
      .subscribe();
  }

  getSubjects(): void {
    this.purposeClassroomService.getPurposesClassroom()
      .subscribe(purposesclassroom => this.purposesclassroom = purposesclassroom);

  }
  getTypesClassroom(): void {
    this.typeClassroomService.getTypesClassroom()
      .subscribe(typeclassrooms => this.typeclassrooms = typeclassrooms);

  }
}
