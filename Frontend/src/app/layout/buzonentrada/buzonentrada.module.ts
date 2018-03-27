import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuzonentradaComponent } from './buzonentrada.component';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { BuzonentradaRoutingModule } from './buzonentrada-routing.module';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    BuzonentradaRoutingModule
  ],
  declarations: [BuzonentradaComponent]
})
export class BuzonentradaModule { }
