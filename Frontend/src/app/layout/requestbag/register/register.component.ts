import {  Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import {  RequestService} from '../../services/request.service';
import {  TypeClassroom} from '../../models/type-classroom';
import {  TypeClassroomService} from '../../services/type-classroom.service';
import {  PurposeClassroom} from '../../models/purpose-classroom';
import {  PurposeClassroomService} from '../../services/purpose-classroom.service';
import {  NgForm } from '@angular/forms';
import { 
  AbstractControl, FormArray, 
  FormBuilder, FormControl,
  FormGroup, Validators } from '@angular/forms'
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
  request: any = {
  };
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
  { }

  ngOnInit() {
    this.getSubjects();
    this.getTypesClassroom();
    this.datetimes$  = this.datetimeService.getDatetimes();
    this.datetimeService.loadDummyData();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
  request_specific: any = {
  };
  logForm(form: NgForm) {
    // console.log("purpose id"+form.controls['purpose_classroom_id'].value)
    // console.log("type id"+this.request_specific.purpose_classroom )
    // console.log("currentUser"+this.currentUser.id)
    console.log("day "+ localStorage.getItem("day") )
    console.log("begin_at_hour "+ localStorage.getItem("begin_at_hour") )
    console.log("begin_at_minute "+ localStorage.getItem("begin_at_minute") )
    console.log("end_at_hour "+ localStorage.getItem("end_at_hour") )
    console.log("end_at_minute "+ localStorage.getItem("end_at_minute") )
    let day = localStorage.getItem("day");
    let bah = localStorage.getItem("begin_at_hour");
    let bam = localStorage.getItem("begin_at_minute");
    let eah = localStorage.getItem("end_at_hour");
    let eam = localStorage.getItem("end_at_minute");
    console.log(bah)
    console.log(bam)
    console.log(eah)
    console.log(eam)
    this.request_specific.teacher_id = this.currentUser.id;
    this.request_specific.state = 'pending';
    this.request_specific.type_request= "specific" 
    this.request_specific.bah= bah;
    this.request_specific.bam= bam;
    this.request_specific.eah= eah;
    this.request_specific.eam= eam;
    this.request_specific.day= day;
         
    console.log(this.request_specific)
    console.log("antes del add");
    this.add();
  }

  registerClient() {
    this.router.initialNavigation();
  }

  add(): void {
    console.log(this.request_specific)
    // if (!this.request) { return; }
    
    this.requestService.addRequest(this.request_specific)
      .subscribe(
        data => 
          {
            console.log("Create request");
          },
        error => {
            console.log("Error occured");
          }
      );
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
