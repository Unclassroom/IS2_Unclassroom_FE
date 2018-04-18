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
      .subscribe(requests => this.requests = requests);

  }

}
