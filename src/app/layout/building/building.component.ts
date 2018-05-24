import { Component, OnInit } from '@angular/core';
import {BuildingService} from '../services/building.service';
import {Building} from '../models/building';

@Component({
  selector: 'app-building',
  templateUrl: './building.component.html',
  styleUrls: ['./building.component.css']
})
export class BuildingComponent implements OnInit {
  buildings: Building[];

  constructor(private buildingsService: BuildingService) { }

  ngOnInit() {
    this.getBuildings();
  }

  getBuildings(): void {
    this.buildingsService.getBuildings()
      .subscribe(buildings => this.buildings = buildings);

  }
}
