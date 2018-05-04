import { Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import {RequestService} from '../../services/request.service';
import {TypeClassroom} from '../../models/type-classroom';
import {TypeClassroomService} from '../../services/type-classroom.service';
import {PurposeClassroom} from '../../models/purpose-classroom';
import {PurposeClassroomService} from '../../services/purpose-classroom.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {DatetimeService} from './datetime.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {

  private datetimes$: Observable<any[]>;
  files: FileList;
  filestring: string;
  request: any = {
    state: '',
    motive: '',
    type_classroom_id: '',
    external_person_id: '',
    purpose_classroom_id: '',
    teacher_id: '',
    file: {
      url: ''
    }
  }
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  purposesclassroom: PurposeClassroom[];
  typeclassrooms: TypeClassroom[];
  private router: Router;
  constructor(private requestService: RequestService, private purposeClassroomService: PurposeClassroomService,
               private typeClassroomService: TypeClassroomService, private datetimeService: DatetimeService) { }
  ngOnInit() {
    this.getSubjects();
    this.getTypesClassroom();
    this.datetimes$  = this.datetimeService.getDatetimes();
    this.datetimeService.loadDummyData();
  }

  createDatetime(datetime) {
    this.datetimeService.createNewDatetime(datetime);
  }


  getFiles(event) {
    this.files = event.target.files;
    var reader = new FileReader();
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsBinaryString(this.files[0]);
  }


  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.filestring = btoa(binaryString);  // Converting binary string data.
    console.log(this.filestring );
  }
  logForm(form: NgForm) {
    this.request.state = 'pending' ;
    this.request.motive = form.value.motive ;
    this.request.type_classroom_id = form.value.type_classroom_id ;
    this.request.external_person_id = '2' ;
    this.request.purpose_classroom_id = form.value.purpose_classroom_id ;
    this.request.teacher_id = '2';

   // console.log(this.filestring);
    this.add();
  }

  registerClient() {
    this.router.initialNavigation();
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
