import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RegisterRoutingModule} from './register-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MDBBootstrapModule} from 'angular-bootstrap-md/index';
import {NavbarModule} from '../components/navbar/navbar.module';
import {FooterModule} from '../components/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
    FormsModule,
    NavbarModule, FooterModule,
    MDBBootstrapModule.forRoot(),
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
