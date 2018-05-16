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
  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.getReports();
    console.log(this.reports);
  }

  getReports(): void {
    this.reportService.getReports()
      .subscribe(reports => this.reports = reports);

  }
  onChangeReport(id: number): void {
    this.reportService.getReportsPagination(id)
      .subscribe(reports => this.reports = reports);
  }

}
