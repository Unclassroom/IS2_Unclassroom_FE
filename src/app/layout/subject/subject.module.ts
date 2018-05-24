import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import {SubjectComponent} from './subject.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {SubjectRoutingModule} from './subject-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Subject} from '../models/subject';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    SubjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [EditComponent, RegisterComponent, SubjectComponent],
  providers: [ Subject ]
})
export class SubjectModule { }
