import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  AuthService, 
} from "angular5-social-login";

@NgModule({
  imports: 
  [
    CommonModule,
    LoginRoutingModule,
    // NoopAnimationsModule,
    // BrowserAnimationsModule,
    FormsModule
  ],
  providers:
  [
    AuthService
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
