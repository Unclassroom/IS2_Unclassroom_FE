import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';
import {RequestService} from '../services/request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

  requestpurposes = [];
  requeststate = [];

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012'
  ];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }
  ];

  // Doughnut
  // public doughnutChartLabels: string[] = [];

  // Doughnut
  public doughnutChartLabels: string[] = ['data', 'data', 'data', 'data'];

  public doughnutChartData: number[] = [100, 100, 100, 100];
  public doughnutChartType: string = 'doughnut';

  // Pie
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType: string = 'pie';
  public _backgroundColors = [{backgroundColor: [
      'rgba(255, 99, 132,0.4)',
      'rgba(54, 162, 235,0.4)',
      'rgba(255, 206, 86,0.4)',
      'rgba(231, 233, 237,0.4)',
      'rgba(75, 192, 192,0.4)',
      'rgba(151, 187, 205,0.4)',
      'rgba(220, 220, 220,0.4)',
      'rgba(247, 70, 74,0.4)',
      'rgba(70, 191, 189,0.4)',
      'rgba(253, 180, 92,0.4)',
      'rgba(148, 159, 177,0.4)',
      'rgba(77, 83, 96,0.4)'
    ]}];
  // events
  public chartClicked(e: any): void {
    // console.log(e);
  }

  public chartHovered(e: any): void {
    // console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    const data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.random() * 100,
      56,
      Math.random() * 100,
      40
    ];
    const clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
  public dataDoughtChart(requestpurposes) {
   // console.log(Object.keys(this.requestpurposes[0]));
    // this.doughnutChartLabels.push('coloquio academico  1');
     this.doughnutChartData.length = 0;
     this.doughnutChartLabels.length = 0;
    for (const prop in this.requestpurposes[0]) {
      if (prop) {
      this.doughnutChartData.push( Number (this.requestpurposes[0][prop]) );
      this.doughnutChartLabels.push(prop );
       }
    }
    //return doughnutChartDataFunction;
  }

  public dataPieChart(requeststate) {
    // console.log(this.requestpurposes[0]);
    // console.log(Object.keys(this.requestpurposes[0]));
    // this.doughnutChartLabels.push('coloquio academico  1');
    //this.doughnutChartData.length = 0;
    //this.doughnutChartLabels.length = 0;

    for (const prop in this.requeststate[0]) {
      this.pieChartData.push( Number (this.requeststate[0][prop]) );
      this.pieChartLabels.push(prop );
    }
  }

  constructor(private requestService: RequestService ) {

  }
  getdoughnutChartData(): void {
    this.requestService.getDataRequestByPurposes()
      .subscribe((response) => {
        this.requestpurposes.push(response);
        this.dataDoughtChart(this.requestpurposes[0]);

      });
  }

  getpieChartData(): void {
    this.requestService.getDataRequestByState()
      .subscribe((response) => {
        this.requeststate.push(response);
        this.dataPieChart(this.requeststate[0]);

      });
  }

  downloadPDF() {

    html2canvas(document.getElementById('timerequest')).then(function(canvas) {
      const self = this;

      const doc = new jsPDF();
      doc.text(80, 20, 'Proposito de peticiones');
      const img = canvas.toDataURL('image/png');
      doc.addImage(img, 'JPEG', 10, 40, 190, 110);
      doc.save('GeneralData.pdf');
    });
    // doc.save('test.pdf');//fails to add image to pdf
  }

  // servicios

  getDataRequestByPurposes_Filtered(): void {

    this.requestService.getDataRequestByPurposes_Filtered()
      .subscribe((response) => {
        this.requestpurposes[0] = response;
        this.dataDoughtChart(this.requestpurposes[0]);
        console.log (response);

      });
  }



  ngOnInit() {
    this.getdoughnutChartData();
    this.getpieChartData();
  }


}
