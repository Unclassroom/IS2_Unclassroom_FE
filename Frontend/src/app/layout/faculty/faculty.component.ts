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
  constructor(private facultyService: FalcultyService) { }

  ngOnInit() {
    this.getFaculties();
  }

  getFaculties(): void {
    this.facultyService.getFaculties()
      .subscribe(faculties => this.faculties = faculties);

  }

}
