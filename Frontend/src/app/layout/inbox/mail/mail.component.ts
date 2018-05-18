import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
// Models
import { InboxRequest} from '../../models/inboxrequest';
// Services
import { RequestService} from '../../services/request.service';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent implements OnInit {
  class_ava: any = {}
  specific_schedule:any={}
  cyclic_schedule:any={}
  ini_date = String
  end_date = String
  request_mail: InboxRequest;
  id = +this.route.snapshot.paramMap.get('id');
  request = {
    'state': 'send'
  };

  constructor(
    private requestService: RequestService, 
    private route: ActivatedRoute,
    private classroomService: ClassroomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getRequest();
  }
  getRequest(): void {
    this.requestService.getRequest(this.id)
      .subscribe(
        request => {
          this.request_mail = request,
          console.log(this.request_mail)
        },
        error =>{
          console.log("Error ocurred")
        }
      );
  }
  getClassroom(time){
    console.log(time)
    this.ini_date = time.date.concat(" ").concat(time.begin_at_hour).concat(":").concat(time.begin_at_minute)
    this.end_date = time.date.concat(" ").concat(time.end_at_hour).concat(":").concat(time.end_at_minute)
    this.specific_schedule.ini_date = this.ini_date
    this.specific_schedule.end_date = this.end_date
    console.log(this.request_mail)
    
    console.log(this.specific_schedule)
    this.classroomService.getClassroomsAvailable(this.specific_schedule)
      .subscribe();
    this.class_ava = JSON.parse(localStorage.getItem("class_ava"))
    localStorage.setItem("request_mail", JSON.stringify(this.request_mail))
    localStorage.setItem("specific_schedule", JSON.stringify(this.specific_schedule))
    localStorage.setItem("specific_schedule_separate", JSON.stringify(time))
    console.log(this.class_ava)
    this.router.navigateByUrl('/layout/inbox/mail/{{request_mail.id}}/class-ava');
  }
}
