import { Component, OnInit } from '@angular/core';
import { Opinion } from '../models/opinion';
import { OpinionService } from '../services/opinion.service';

@Component({
  selector: 'app-comentreg',
  templateUrl: './comentreg.component.html',
  styleUrls: ['./comentreg.component.css']
})
export class ComentregComponent implements OnInit {
  opinions: Opinion[];
  Pages: number;
  Number = [];
  previous: number;
  next: number;
  first: number;
  last: number;
  constructor(private opinionService: OpinionService) { }

  ngOnInit() {
    this.getOpinions();
    this.getPages();
    console.log(this.opinions);
  }

  getOpinions(): void {
    this.opinionService.getOpinions()
      .subscribe(opinions => this.opinions = opinions);

  }

  getPages(): void {
    this.opinionService.getPages()
      .subscribe((Pages) => {
        this.Pages = Pages;
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
    this.opinionService.getPagination(id)
      .subscribe(opinions => this.opinions = opinions);
  }

  onChangeNext(id: number): void {
    const nexteventsaux = id + 1;
    if (nexteventsaux <= this.last ) {
      this.previous = id + 1;
      this.next = nexteventsaux;
      this.opinionService.getPagination(this.next)
        .subscribe(opinions => this.opinions = opinions);
    }
  }
  onChangePrevious(id: number): void {
    const previouseventsaux = id - 1;
    if (previouseventsaux >= this.first ) {
      this.next = id - 1;
      this.previous = previouseventsaux;
      this.opinionService.getPagination(this.previous)
        .subscribe(opinions => this.opinions = opinions);
    }
  }
}
