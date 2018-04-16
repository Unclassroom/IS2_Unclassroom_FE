import { Component, OnInit } from '@angular/core';
import {Headbuildingonfaculty} from '../models/headbuildingonfaculty';
import {HeadBuildingService} from '../services/head-building.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  headbuildingsonfaculty: Headbuildingonfaculty[];

  constructor(private headBuildingService: HeadBuildingService) { }

  ngOnInit() {
    this.getHeadBuildingsGeneral();
  }

  getHeadBuildingsGeneral(): void {
    this.headBuildingService.getHeadBuildingsGeneral()
      .subscribe(headbuildingsonfaculty => this.headbuildingsonfaculty = headbuildingsonfaculty);

  }

}
