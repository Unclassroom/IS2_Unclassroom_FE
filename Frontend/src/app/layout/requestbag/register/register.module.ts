import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import { DateitemComponent } from './dateitem/dateitem.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    RegisterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [RegisterComponent, DateitemComponent]
})
export class RegisterModule { }
