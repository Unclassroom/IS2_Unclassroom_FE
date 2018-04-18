import { Component, OnInit } from '@angular/core';
import {SubjectService} from '../services/subject.service';
import {Subject} from '../models/subject';
import {FalcultyService} from '../services/falculty.service';
import {Faculty} from '../models/faculty';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: Subject[];
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
    this.getSubjects();
  }
  getSubjects(): void {
    this.subjectService.getSubjects()
      .subscribe(subjects => this.subjects = subjects);

  }


}
