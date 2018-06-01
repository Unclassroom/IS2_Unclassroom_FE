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
  Pages: number;
  Number = [];
  previous: number;
  next: number;
  first: number;
  last: number;

  constructor(private requestService: RequestService) { }

  ngOnInit() {
    this.getAllRequest();
    this.getPages();
  }
  getAllRequest(): void {
    this.requestService.getAllRequest()
      .subscribe(
        requests => {
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

  getPages(): void {
    this.requestService.getPages()
      .subscribe((Pages) => {
        this.Pages = ( Pages >= 10) ? 10 : Pages;
        for ( let i = 0; i < this.Pages; i++ ) {
          this.Number[i] = i + 1;
          console.log(i);
        }
        this.previous = 1;
        this.next = 1;
        this.first = 1;
        this.last = this.Pages;
      });

  }
  onChangePage(id: number): void {

    this.previous = id;
    this.next = id;
    /*
    this.previous = (id - 1 >= this.first) ? id - 1 : 1;
    this.next = (id + 1 <= this.last) ? id + 1 : this.last;*/
    this.requestService.getPagination(id)
      .subscribe(requests => this.requests = requests);
  }

  onChangeNext(id: number): void {
    const nexteventsaux = id + 1;
    if (nexteventsaux <= this.last ) {
      this.previous = id + 1;
      this.next = nexteventsaux;
      this.requestService.getPagination(this.next)
        .subscribe(requests => this.requests = requests);
    }
  }
  onChangePrevious(id: number): void {
    const previouseventsaux = id - 1;
    if (previouseventsaux >= this.first ) {
      this.next = id - 1;
      this.previous = previouseventsaux;
      this.requestService.getPagination(this.previous)
        .subscribe(requests => this.requests = requests);
    }
  }

}
