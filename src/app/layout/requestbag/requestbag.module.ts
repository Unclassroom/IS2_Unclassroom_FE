import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {RequestbagComponent} from './requestbag.component';
import {RegisterComponent} from './register/register.component';
import {RequestbagRoutingModule} from './requestbag-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material';
import {DatetimeListComponent} from './register/datetime-list/datetime-list.component';
import {DatetimeService} from './register/datetime.service';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    RequestbagRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule
  ],
  declarations: [RequestbagComponent, RegisterComponent,
    DatetimeListComponent],
  providers: [DatetimeService]
})
export class RequestbagModule { }
