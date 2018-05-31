import { Component, OnInit } from '@angular/core';
import {FalcultyService} from '../services/falculty.service';
import {Faculty} from '../models/faculty';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {
  faculties: Faculty[];
  Pages: number;
  Number = [];
  previous: number;
  next: number;
  first: number;
  last: number;
  constructor(private facultyService: FalcultyService) { }

  ngOnInit() {
    this.getFaculties();
    this.getPages();
    console.log(this.faculties);
  }

  getFaculties(): void {
    this.facultyService.getFaculties()
      .subscribe(faculties => this.faculties = faculties);

  }

  getPages(): void {
    this.facultyService.getPages()
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
    this.facultyService.getPagination(id)
      .subscribe(faculties => this.faculties = faculties);
  }

  onChangeNext(id: number): void {
    const nexteventsaux = id + 1;
    if (nexteventsaux <= this.last ) {
      this.previous = id + 1;
      this.next = nexteventsaux;
      this.facultyService.getPagination(this.next)
        .subscribe(faculties => this.faculties = faculties);
    }
  }
  onChangePrevious(id: number): void {
    const previouseventsaux = id - 1;
    if (previouseventsaux >= this.first ) {
      this.next = id - 1;
      this.previous = previouseventsaux;
      this.facultyService.getPagination(this.previous)
        .subscribe(faculties => this.faculties = faculties);
    }
  }

}
