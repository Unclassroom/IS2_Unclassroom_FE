import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { login } from '../redux/session';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'angular5-social-login';
import {MDBBootstrapModule} from 'angular-bootstrap-md/index';
import {NavbarComponent} from '../components/navbar/navbar.component';
import {FooterComponent} from '../components/footer/footer.component';
import {NavbarModule} from '../components/navbar/navbar.module';
import {FooterModule} from '../components/footer/footer.module';
// import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    // NoopAnimationsModule,
    // BrowserAnimationsModule,
    FormsModule
    , NavbarModule, FooterModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [
    AuthService
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }

/*onsubmit(this.state, ){
  //e.preventDefault();
  this.props.login(this.state.auth);
  this.setState({
    email: '',
    password: ''
  });
  {console.log(JSON.stringify(this.state))}
}*/
