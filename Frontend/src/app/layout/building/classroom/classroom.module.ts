import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassroomComponent } from './classroom.component';
import {ClassroomRoutingModule} from './classroom-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ClassroomRoutingModule
  ],
  declarations: [ClassroomComponent]
})

export class ClassroomModule { }
