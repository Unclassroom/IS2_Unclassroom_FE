import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit/edit.component';
import { RegisterComponent } from './register/register.component';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {GroupRoutingModule} from './group-routing.module';
import {GroupComponent} from './group.component';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    GroupRoutingModule
  ],
  declarations: [EditComponent, RegisterComponent, GroupComponent]
})
export class GroupModule { }
