import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuildingComponent } from './building.component';
import {BuildingRoutingModule} from './building-routing.module';
import {ClassroomComponent} from './classroom/classroom.component';
import {Building} from '../models/building';

@NgModule({
  imports: [
    CommonModule,
    BuildingRoutingModule
  ],
  declarations: [ BuildingComponent, ClassroomComponent],
  providers: [ Building ]
})
export class BuildingModule { }
