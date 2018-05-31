import { Component, OnInit } from '@angular/core';
import { Report } from '../models/report';
import { ReportService } from '../services/report.service';

@Component({
  selector: 'app-damagereg',
  templateUrl: './damagereg.component.html',
  styleUrls: ['./damagereg.component.css']
})
export class DamageregComponent implements OnInit {
  reports: Report[];
  Pages: number;
  Number = [];
  previous: number;
  next: number;
  first: number;
  last: number;
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getReports();
    this.getPages();
  }

  getReports(): void {
    this.reportService.getReports()
      .subscribe(reports => {console.log(this.reports)
        this.reports = reports});

  }

  getPages(): void {
    this.reportService.getPages()
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
    this.reportService.getPagination(id)
      .subscribe(opinions => this.reports = opinions);
  }

  onChangeNext(id: number): void {
    const nexteventsaux = id + 1;
    if (nexteventsaux <= this.last ) {
      this.previous = id + 1;
      this.next = nexteventsaux;
      this.reportService.getPagination(this.next)
        .subscribe(opinions => this.reports = opinions);
    }
  }
  onChangePrevious(id: number): void {
    const previouseventsaux = id - 1;
    if (previouseventsaux >= this.first ) {
      this.next = id - 1;
      this.previous = previouseventsaux;
      this.reportService.getPagination(this.previous)
        .subscribe(opinions => this.reports = opinions);
    }
  }

}
