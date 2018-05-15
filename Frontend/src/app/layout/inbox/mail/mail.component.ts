import { Component, OnInit } from '@angular/core';
import { InboxRequest} from '../../models/inboxrequest';
import { RequestService} from '../../services/request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})

export class MailComponent implements OnInit {
  request_mail: InboxRequest;
  id = +this.route.snapshot.paramMap.get('id');
  request = {
    'state': 'send'
  };

  constructor(
    private requestService: RequestService, 
    private route: ActivatedRoute) { }

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

  save(): void {
    this.requestService.updateRequest(this.request, this.request_mail.id)
      .subscribe();
  }

}
