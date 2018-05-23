import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from './navbar.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md/index';

@NgModule({
  imports: [CommonModule,
    MDBBootstrapModule.forRoot()],
  declarations: [NavbarComponent],
  exports: [NavbarComponent]
})


export class NavbarModule { }
