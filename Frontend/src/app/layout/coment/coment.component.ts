import {  Component, OnInit, ChangeDetectionStrategy  } from '@angular/core';
import {  Router  } from '@angular/router';
import {  User } from '../../_models/index';
import {  NgForm } from '@angular/forms';
import {  Observable } from 'rxjs/Observable';
// Models
import {  Building  } from '../models/building';
import {  Classroom  } from '../models/classroom';
// Services
import {  OpinionService  } from '../services/opinion.service';
import {  BuildingService } from '../services/building.service'
import {  ClassroomService  } from '../services/classroom.service'

@Component({
  selector: 'app-coment',
  templateUrl: './coment.component.html',
  styleUrls: ['./coment.component.css']
})

export class ComentComponent implements OnInit { 
  buildings: Building[];
  currentUser: User;
  classrooms: Classroom[];
  opinion: any = {
  };
  selectBuilding:boolean = false;

  constructor(
    private opinionService: OpinionService,
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
    // console.log(this.currentUser.id);
    // console.log(this.opinion.classroom_id);
    // console.log(this.opinion.description);
    this.opinion.user_type = this.currentUser.role;
    this.opinion.user_id = this.currentUser.id;
    this.opinion.building_id = this.opinion.building_id;
    this.opinion.classroom_id = this.opinion.classroom_id ;
    this.opinion.description = this.opinion.description;
    console.log("antes del add");
    this.add();
  }

  

  add(): void {
    this.opinionService.addOpinion(this.opinion)
      .subscribe(
        data => 
          {
            alert("Create opinion")
            console.log("Create opinion");
          },
        error => 
          {
            alert("Error occurred")
            console.log("Error occurred");
          }
      );
  }

  getBuildings(): void {
    this.buildingService.getBuildings()
      .subscribe(buildings => this.buildings = buildings);
  }

  verify(): void{
    // console.log(this.opinion.building_id)
    this.getClassrooms(this.opinion.building_id)
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
            console.log(classrooms[0].id),
            this.classrooms = classrooms
            localStorage.setItem("ct", JSON.stringify(classrooms))
          },
          error => {
            console.log("Error occured");
          }
        );
  }
}