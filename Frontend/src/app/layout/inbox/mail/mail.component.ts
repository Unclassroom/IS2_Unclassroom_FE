import { Component, OnInit } from '@angular/core';
import { InboxRequest} from '../../models/inboxrequest';
import { RequestService} from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';
import { ClassroomService } from '../../services/classroom.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent implements OnInit {
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
    private classroomService: ClassroomService
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
    this.ini_date = time.date.concat(" ").concat(time.begin_at_hour).concat(":").concat(time.begin_at_minute)
    this.end_date = time.date.concat(" ").concat(time.end_at_hour).concat(":").concat(time.end_at_minute)
    this.specific_schedule.ini_date = this.ini_date
    this.specific_schedule.end_date = this.end_date
    console.log(this.request_mail)
    console.log(this.specific_schedule)
    this.classroomService.getClassroomsAvailable(this.specific_schedule)
      .subscribe(
        response => {
          alert(response);
        },
        error => {
          alert("Error")
        }
      );

  }
  save(): void {
    this.requestService.updateRequest(this.request, this.request_mail.id)
      .subscribe();
  }

}
