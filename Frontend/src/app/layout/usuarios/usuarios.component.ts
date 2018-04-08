import { Component, OnInit } from '@angular/core';
import {Headbuildingonfaculty} from '../models/headbuildingonfaculty';
import {HeadBuildingService} from '../services/head-building.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
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
