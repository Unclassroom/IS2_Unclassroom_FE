import { Component, OnInit } from '@angular/core';
import {EventService} from '../../../services/event.service';
import {Event} from '../../..//models/event';
@Component({
  selector: 'app-class-ava',
  templateUrl: './class-ava.component.html',
  styleUrls: ['./class-ava.component.css']
})
export class ClassAvaComponent implements OnInit {

  events: Event[];
  constructor(
    private eventService: EventService
  ) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents(): void {
    this.eventService.getEvents()
      .subscribe(events => this.events = events);

  }

}
