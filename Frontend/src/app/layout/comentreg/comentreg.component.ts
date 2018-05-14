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
  constructor(private opinionService: OpinionService) { }

  ngOnInit() {
    this.getOpinions();
    console.log(this.opinions);
  }

  getOpinions(): void {
    this.opinionService.getOpinions()
      .subscribe(opinions => this.opinions = opinions);

  }
  onChangeOpinion(id: number): void {
    this.opinionService.getOpinionsPagination(id)
      .subscribe(opinions => this.opinions = opinions);
  }

}
