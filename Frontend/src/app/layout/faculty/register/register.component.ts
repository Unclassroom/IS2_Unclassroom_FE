import { Component, OnInit } from '@angular/core';
import {Faculty} from '../../models/faculty';
import {FalcultyService} from '../../services/falculty.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  faculty = {};

  constructor(private facultyService: FalcultyService) { }

  ngOnInit() {
  }
  add(): void {
    if (!this.faculty) { return; }
    this.facultyService.addFaculty(this.faculty)
      .subscribe();
  }

}
