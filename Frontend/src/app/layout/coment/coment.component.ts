import {  Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import {  RequestService  } from '../services/request.service';
import {  Router  } from '@angular/router';
import {  User } from '../../_models/index';
import {  NgForm } from '@angular/forms';
import {  Observable } from 'rxjs/Observable';
import {  Building  } from '../models/building';
import {  Classroom  } from '../models/classroom';
import {  BuildingService } from '../services/building.service'
import {  ClassroomService  } from '../services/classroom.service'

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})
export class ComentComponent implements OnInit {
  request: any = {
    student_id: '',
    classroom_id: '',
    description: ''
  }
  buildings: Building[];
  currentUser: User;
  classrooms: Classroom[];

  constructor(private requestService: RequestService,
              private router:Router,
              private buildingService: BuildingService,
              private classroomService: ClassroomService) { 
                this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
              }

  ngOnInit() {
    this.getBuildings();
    console.log(this.currentUser);

  }

  logForm(form: NgForm) {

    console.log(this.currentUser.id);
    this.request.student_id = this.currentUser.id;
    console.log(this.request.student_id);
    this.request.classroom_id = form.value.classroom_id ;
    this.request.description = form.value.description ;

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

  getBuildings(): void {
    this.buildingService.getBuildings()
      .subscribe(buildings => this.buildings = buildings);

  }

  getClassrooms(id:number): void {
    
    this.classroomService.getClassrooms(id)
      .subscribe(classrooms => this.classrooms = classrooms);

  }

}
