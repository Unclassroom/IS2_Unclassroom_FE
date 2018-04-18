import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {FacultyRoutingModule} from './faculty-routing.module';
import {FacultyComponent} from './faculty.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Faculty} from '../models/faculty';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    FacultyRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent, EditComponent, FacultyComponent],
  providers: [ Faculty ]
})
export class FacultyModule { }
