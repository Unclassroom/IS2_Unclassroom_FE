import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { BannerComponent } from './components/banner/banner.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LandingRoutingModule } from './landing-routing.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {SectioninfoComponent} from './components/sectioninfo/sectioninfo.component';
import {FooterComponent} from './components/footer/footer.component';
import {LoginModule} from '../login/login.module';
import {LoginComponent} from '../login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    LandingRoutingModule,
    FormsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [LandingComponent, BannerComponent, NavbarComponent, SectioninfoComponent, FooterComponent],
  bootstrap: [LandingComponent]
})
export class LandingModule { }
