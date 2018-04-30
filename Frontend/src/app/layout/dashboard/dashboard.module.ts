import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { StatModule} from '../../stat/stat.module';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    DashboardRoutingModule,
    StatModule,
    Ng2Charts
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
