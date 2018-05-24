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
    this.request_specific.user_id = this.currentUser.id;
    this.request_specific.user_type = this.currentUser.role;
    this.request_specific.state = 'pending';
    this.request_specific.type_request= "specific" 
    let array = localStorage.getItem("schedule_options");
    console.log(JSON.parse(array));
    this.request_specific.specific = JSON.parse(array)
    // console.log(this.request_specific);
    console.log("antes del add");
    this.add();
  }

  registerClient() {
    this.router.initialNavigation();
  }

  add(): void {
    console.log(this.request_specific)
    console.log(this.request_specific.specific.specific)
    // if (!this.request) { return; }
    
    this.requestService.addRequest(this.request_specific)
      .subscribe(
        data => 
          {
            console.log(data)
            alert("Create request");
          },
        error => {
            alert("Error occured");
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
