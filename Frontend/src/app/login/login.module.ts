import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { login } from '../redux/session';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    // NoopAnimationsModule,
    // BrowserAnimationsModule,
    FormsModule
  ],

  declarations: [LoginComponent]
})
export class LoginModule { }
