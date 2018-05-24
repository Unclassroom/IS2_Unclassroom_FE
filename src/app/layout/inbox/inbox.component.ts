import { Component, OnInit } from '@angular/core';
import {InboxRequest} from '../models/inboxrequest';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  requests: InboxRequest[];

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getAllRequest();
    
  }

  getAllRequest(): void {
    this.requestService.getAllRequest()
      .subscribe(
        requests => 
        {
          // localStorage.setItem("id_request", requests.id);
          console.log(requests[0].id)
          console.log(requests[0].type_classroom)
          console.log(requests)
          this.requests = requests
        },
        errors=>{

        }
      );
  }

}
