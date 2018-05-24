import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './register/register.component';
import {EditComponent} from './edit/edit.component';
import {SubjectComponent} from './subject.component';

const routes: Routes = [
  {
    path: '', component: SubjectComponent
  },
  { path: 'register', component: RegisterComponent  },
  { path: 'edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
