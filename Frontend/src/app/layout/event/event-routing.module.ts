import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EventComponent} from './event.component';
import {RegisterComponent} from './register/register.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {
    path: '', component: EventComponent
  },
  { path: 'register', component: RegisterComponent },
  { path: 'edit', component: EditComponent }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class EventRoutingModule { }
