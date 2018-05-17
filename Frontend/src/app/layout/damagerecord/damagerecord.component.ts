import {  Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import {  Router  } from '@angular/router';
import {  User } from '../../_models/index';
import {  NgForm } from '@angular/forms';
import {  Observable } from 'rxjs/Observable';
// Models
import {  Building  } from '../models/building';
import {  Classroom  } from '../models/classroom';
// Services
import {  ReportService  } from '../services/report.service';
import {  BuildingService } from '../services/building.service'
import {  ClassroomService  } from '../services/classroom.service'

@Component({
  selector: 'app-damagerecord',
  templateUrl: './damagerecord.component.html',
  styleUrls: ['./damagerecord.component.css']
})
export class DamagerecordComponent implements OnInit {
  buildings: Building[];
  currentUser: User;
  classrooms: Classroom[];
  report: any = {
  };
  selectBuilding:boolean = false;

  constructor(
    private reportService: ReportService,
    private router:Router,
    private buildingService: BuildingService,
    private classroomService: ClassroomService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.getBuildings();
    console.log(this.currentUser);
  }
  /*logForm(form: NgForm) {
    // console.log(this.currentUser.id);
    // console.log(this.report.classroom_id);
    // console.log(this.report.description);
    this.report.student_id = this.currentUser.id;
    this.report.classroom_id = this.report.classroom_id ;
    this.report.description = this.report.description;
    this.report.image = this.report.image;

    console.log("antes del add");
    this.add();
  }

  registerClient() {
    this.router.initialNavigation();
  }

  add(): void {
    this.reportService.addReport(this.report)
      .subscribe(
        data => 
          {
            alert("Reporte enviado")
            console.log("Create report");
          },
        error => 
          {
            alert("Error occurred")
            console.log("Error occurred");
          }
      );
  }*/

  logForm(form: NgForm) {
     
         console.log(this.currentUser.id);
         this.report.user_id = this.currentUser.id;
         this.report.user_type = this.currentUser.role;
         
         console.log( this.report.student_id);
          this.report.classroom_id = form.value.classroom_id ;
          this.report.description = form.value.description ;
     
         console.log("antes del add");
         this.add();
       }
     
       registerClient() {
         this.router.initialNavigation();
       }
     
       add(): void {
     
         if (! this.report) { return; }
         
          this.reportService.addReport( this.report)
           .subscribe();
       }
     

  getBuildings(): void {
    this.buildingService.getBuildings()
      .subscribe(buildings => this.buildings = buildings);
  }

  verify(): void{
    // console.log(this.opinion.building_id)
    this.getClassrooms(this.report.building_id)
    // console.log(this.classrooms)
    this.classrooms = JSON.parse(localStorage.getItem("ct"))
    // console.log(this.classrooms)
  }

  getClassrooms(id:number) 
  {
    this.classroomService.getClassrooms(id)
      .subscribe(
          classrooms => 
          {
            //console.log(classrooms[0].id),
            this.classrooms = classrooms
            localStorage.setItem("ct", JSON.stringify(classrooms))
          },
          error => {
            console.log("Error occured");
          }
        );
  }
}