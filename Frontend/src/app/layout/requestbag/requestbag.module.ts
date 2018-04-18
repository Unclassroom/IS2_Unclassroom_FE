import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {RequestbagComponent} from './requestbag.component';
import {RegisterComponent} from './register/register.component';
import {RequestbagRoutingModule} from './requestbag-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    RequestbagRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RequestbagComponent, RegisterComponent]
})
export class RequestbagModule { }
