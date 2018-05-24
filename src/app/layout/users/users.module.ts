import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import {NgbAlertModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {UsersRoutingModule} from './users-routing.module';
import {TablesModule} from '../components/tables/tables.module';
import {Headbuildingonfaculty} from '../models/headbuildingonfaculty';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    UsersRoutingModule,
    TablesModule
  ],
  declarations: [UsersComponent],
  providers: [ Headbuildingonfaculty ],
})
export class UsersModule { }
