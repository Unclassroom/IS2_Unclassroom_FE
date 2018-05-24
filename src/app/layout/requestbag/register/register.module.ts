import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {RegisterRoutingModule} from './register-routing.module';
import {RegisterComponent} from './register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {MatNativeDateModule} from '@angular/material';
import {DatetimeListComponent} from './datetime-list/datetime-list.component';

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
  declarations: [RegisterComponent,
    DatetimeListComponent],
  providers: []
})
export class RegisterModule { }
