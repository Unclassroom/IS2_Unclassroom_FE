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
  eventsPages: number;
  eventsNumber = [];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
    this.getEventsPages();
  }
  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);

  }
  getEventsPages(): void {
    this.eventService.getEventsPages()
      .subscribe((eventsPages) => {
        this.eventsPages = eventsPages;
        for ( let i = 0; i < this.eventsPages; i++ ) {
          this.eventsNumber[i] = i + 1;
          console.log(i);
        }
    });

  }
  onChangeEvent(id: number): void {
    this.eventService.getEventsPagination(id)
      .subscribe(events => this.events = events);
  }
}
