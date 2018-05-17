import { Component, OnInit } from '@angular/core';
import {ClassroomService} from '../../services/classroom.service';
import {Building} from '../../models/building';
import {Classroom} from '../../models/classroom';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {
  classrooms: Classroom[];
  id = +this.route.snapshot.paramMap.get('id');
  constructor(private classroomService: ClassroomService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getClassrooms();
  }
  getClassrooms(): void {
    this.classroomService.getClassroom(this.id)
      .subscribe(classrooms => this.classrooms = classrooms);

  }
}
