import {  Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import {  RequestService} from '../../services/request.service';
import {  TypeClassroom} from '../../models/type-classroom';
import {  TypeClassroomService} from '../../services/type-classroom.service';
import {  PurposeClassroom} from '../../models/purpose-classroom';
import {  PurposeClassroomService} from '../../services/purpose-classroom.service';
import {  NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import {  Observable } from 'rxjs/Observable';
import {  DatetimeService} from './datetime.service';
import {  SpecificRequest } from '../../models/specific_request';
import {  User } from '../../../_models/index';

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
  request: SpecificRequest
  currentUser: User
  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }
  purposesclassroom: PurposeClassroom[];
  typeclassrooms: TypeClassroom[];
  day : Date;
  begin_hour : TimeRanges;
  end_hour: TimeRanges;


  constructor(
    private router: Router,
    private requestService: RequestService, 
    private purposeClassroomService: PurposeClassroomService, 
    private typeClassroomService: TypeClassroomService, 
    private datetimeService: DatetimeService
  ) 
  {
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

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
    // console.log("purpose id"+form.value.purpose_classroom_id )
    // console.log("type id"+form.value.type_classroom_id )
    // console.log("currentUser"+this.currentUser.id)
    // console.log("day "+ localStorage.getItem("day") )
    // console.log("begin_at_hour "+ localStorage.getItem("begin_at_hour") )
    // console.log("begin_at_minute "+ localStorage.getItem("begin_at_minute") )
    // console.log("end_at_hour "+ localStorage.getItem("end_at_hour") )
    // console.log("end_at_minute "+ localStorage.getItem("end_at_minute") )
    let day = localStorage.getItem("day");
    let bah = localStorage.getItem("begin_at_hour");
    let bam = localStorage.getItem("begin_at_minute");
    let eah = localStorage.getItem("end_at_hour");
    let eam = localStorage.getItem("end_at_minute")
    this.request.teacher_id = this.currentUser.id;
    this.request.purpose_classroom_id = form.value.purpose_classroom_id ;
    this.request.type_classroom_id = form.value.type_classroom_id ;
    this.request.state = 'pending' ;
    this.request.motive = form.value.motive ;
    this.request.type_request= 'specific' 
    this.request.alternatives= 
    [
      {
        "specific": 
        [
          {
            "begin_at_hour": bah,
            "begin_at_minute": bam,
            "end_at_hour": eah,
            "end_at_minute": eam,
            "date": day
          }
        ]
      }
    ]
    console.log("antes del add");
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
