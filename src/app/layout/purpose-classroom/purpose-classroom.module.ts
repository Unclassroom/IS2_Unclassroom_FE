import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {PurposeClassroomRoutingModule} from './purpose-classroom-routing.module';
import {PurposeClassroomComponent} from './purpose-classroom.component';
import {PurposeClassroom} from '../models/purpose-classroom';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    PurposeClassroomRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent, EditComponent, PurposeClassroomComponent],
  providers: [ PurposeClassroom ]
})
export class PurposeClassroomModule { }
