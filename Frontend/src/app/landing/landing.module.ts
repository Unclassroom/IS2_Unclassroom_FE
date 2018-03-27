import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingRoutingModule } from './landing-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SectioninfoComponent} from './components/sectioninfo/sectioninfo.component';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    LandingRoutingModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [LandingComponent, BannerComponent, NavbarComponent, SectioninfoComponent],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
