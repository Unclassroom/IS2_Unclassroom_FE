import { Component, OnInit } from '@angular/core';
// Models
import { InboxRequest} from '../../../models/inboxrequest';
// Services
import { RequestService} from '../../../services/request.service';
import { ClassroomService } from '../../../services/classroom.service';

@Component({
  selector: 'app-class-ava',
  templateUrl: './class-ava.component.html',
  styleUrls: ['./class-ava.component.css']
})
export class ClassAvaComponent implements OnInit {
  class_ava: any = {}
  specific_schedule:any={}
  specific_schedule_separate:any={}
  s_schedule:any={}
  cyclic_schedule:any={}
  classroom:any={}
  request_mail: InboxRequest;
  event:any ={}
  classroomEvent:any ={}


  constructor(
    private requestService: RequestService,
    private classroomService: ClassroomService
  ) { }

  ngOnInit() 
  {
    this.class_ava = JSON.parse(localStorage.getItem("class_ava"))
    this.specific_schedule = JSON.parse(localStorage.getItem("specific_schedule"))
    this.specific_schedule_separate = JSON.parse(localStorage.getItem("specific_schedule_separate"))
    this.request_mail = JSON.parse(localStorage.getItem("request_mail"))
    console.log(this.class_ava)
    console.log(this.specific_schedule)
    console.log(this.specific_schedule_separate)
    console.log(this.request_mail)
  }

  assignClassroom(classroom_id)
  {
    console.log(classroom_id)
    this.classroomService.createEvent
    (
      this.request_mail.purpose_classroom, 
      this.request_mail.motive
    ).subscribe();
    this.event = JSON.parse(localStorage.getItem("event"))
    console.log(this.event.id)
    console.log(this.specific_schedule_separate)
    this.classroomService.createSpecificSchedule
    (
      this.specific_schedule_separate.date, 
      this.specific_schedule_separate.begin_at_hour, 
      this.specific_schedule_separate.begin_at_minute, 
      this.specific_schedule_separate.end_at_hour, 
      this.specific_schedule_separate.end_at_minute
    ).subscribe();
    this.s_schedule = JSON.parse(localStorage.getItem("s_schedule"))
    console.log(this.s_schedule)
    this.classroomService.createClassroomEvent
    (
      this.event.id, 
      this.s_schedule.id, 
      classroom_id
    ).subscribe();
    this.classroomEvent = JSON.parse(localStorage.getItem("classroom_event"))
    console.log(this.classroomEvent)
    console.log(this.classroomEvent.id)
    // this.classroomService.setStatusRequest
    // (
    //   this.request_mail.id,
    //   this.classroomEvent.id
    // ).subscribe();
  }

  save(): void {
    this.requestService.updateRequest(this.request_mail, this.request_mail.id)
      .subscribe();
  }

}
