import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BuildingComponent} from './building.component';
import {ClassroomComponent} from './classroom/classroom.component';


const routes: Routes = [
  {
    path: '', component: BuildingComponent
  },
  { path: 'classroom/:id', component: ClassroomComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuildingRoutingModule { }
