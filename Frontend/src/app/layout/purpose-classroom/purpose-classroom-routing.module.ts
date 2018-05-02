import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { PurposeClassroomComponent} from './purpose-classroom.component';
import { RegisterComponent} from './register/register.component';
import { EditComponent} from './edit/edit.component';
import { AuthGuard, ManagerGuard } from './../../_guards/index';

const routes: Routes = [
  {
    path: '', component: PurposeClassroomComponent
  },
  { path: 'register', component: RegisterComponent },
  { path: 'edit', component: EditComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurposeClassroomRoutingModule { }
