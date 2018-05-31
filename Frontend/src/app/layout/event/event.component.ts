import { Component, OnInit } from '@angular/core';
import {EventService} from '../services/event.service';
import {Event} from '../models/event';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Event[];
  Pages: number;
  Number = [];
  previous: number;
  next: number;
  first: number;
  last: number;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
    this.getPages();
  }
  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);

  }
  getPages(): void {
    this.eventService.getPages()
      .subscribe((eventsPages) => {
        this.Pages = eventsPages;
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
    this.eventService.getPagination(id)
      .subscribe(events => this.events = events);
  }

  onChangeNext(id: number): void {
    const nexteventsaux = id + 1;
    if (nexteventsaux <= this.last ) {
      this.previous = id + 1;
      this.next = nexteventsaux;
      this.eventService.getPagination(this.next)
        .subscribe(events => this.events = events);
    }
  }
  onChangePrevious(id: number): void {
    const previouseventsaux = id - 1;
    if (previouseventsaux >= this.first ) {
      this.next = id - 1;
      this.previous = previouseventsaux;
      this.eventService.getPagination(this.previous)
        .subscribe(events => this.events = events);
    }
  }
}
