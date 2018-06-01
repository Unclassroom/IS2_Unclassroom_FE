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
  Pages: number;
  Number = [];
  previous: number;
  next: number;
  first: number;
  last: number;

  constructor(private headBuildingService: HeadBuildingService) { }

  ngOnInit() {
    this.getHeadBuildingsGeneral();
    this.getPages();
  }

  getHeadBuildingsGeneral(): void {
    this.headBuildingService.getHeadBuildingsGeneral()
      .subscribe(headbuildingsonfaculty => this.headbuildingsonfaculty = headbuildingsonfaculty);

  }

  getPages(): void {
    this.headBuildingService.getPages()
      .subscribe((Pages) => {
        this.Pages = Pages;
        for ( let i = 0; i < this.Pages; i++ ) {
          this.Number[i] = i + 1;
          console.log(i);
        }
        this.previous = 1;
        this.next = 1;
        this.first = 1;
        this.last = this.Pages;
      });

  }
  onChangePage(id: number): void {

    this.previous = id;
    this.next = id;
    /*
    this.previous = (id - 1 >= this.first) ? id - 1 : 1;
    this.next = (id + 1 <= this.last) ? id + 1 : this.last;*/
    this.headBuildingService.getPagination(id)
      .subscribe(headbuildingsonfaculty => this.headbuildingsonfaculty = headbuildingsonfaculty);
  }

  onChangeNext(id: number): void {
    const nexteventsaux = id + 1;
    if (nexteventsaux <= this.last ) {
      this.previous = id + 1;
      this.next = nexteventsaux;
      this.headBuildingService.getPagination(this.next)
        .subscribe(headbuildingsonfaculty => this.headbuildingsonfaculty = headbuildingsonfaculty);
    }
  }
  onChangePrevious(id: number): void {
    const previouseventsaux = id - 1;
    if (previouseventsaux >= this.first ) {
      this.next = id - 1;
      this.previous = previouseventsaux;
      this.headBuildingService.getPagination(this.previous)
        .subscribe(headbuildingsonfaculty => this.headbuildingsonfaculty = headbuildingsonfaculty);
    }
  }
}
