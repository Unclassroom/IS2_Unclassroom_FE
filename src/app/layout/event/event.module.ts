import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {EventRoutingModule} from './event-routing.module';
import {EventComponent} from './event.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    EventRoutingModule
  ],
  declarations: [RegisterComponent, EditComponent, EventComponent]
})
export class EventModule { }
