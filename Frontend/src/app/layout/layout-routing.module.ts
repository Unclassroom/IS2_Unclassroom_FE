import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { PurposeClassroomModule} from './purpose-classroom/purpose-classroom.module';
import { AuthGuard, ManagerGuard } from './../_guards/index';
import { ProfileComponent} from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      { path: '', redirectTo: 'profile' },
      // Profile
      { path: 'profile', component: ProfileComponent},
      // Dashboard
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      // Recursos
      { path: 'inbox', loadChildren: './inbox/inbox.module#InboxModule'},
      { path: 'calendarevent', loadChildren: './calendarevent/calendarevent.module#CalendareventModule'},
      // Parametrización
      { path: 'parametrization', loadChildren: './parametrization/parametrization.module#ParametrizationModule' },
      // Administración
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'faculty', loadChildren: './faculty/faculty.module#FacultyModule' },
      { path: 'event', loadChildren: './event/event.module#EventModule'},
      { path: 'subject', loadChildren: './subject/subject.module#SubjectModule'},
      { path: 'group', loadChildren: './group/group.module#GroupModule'},
      { path: 'purpose-classroom', loadChildren: './purpose-classroom/purpose-classroom.module#PurposeClassroomModule' },
      // Solicitudes
      { path: 'requestbag', loadChildren: './requestbag/requestbag.module#RequestbagModule' },
      // Sin clasificar
      { path: 'history', loadChildren: './history/history.module#HistoryModule' },
      { path: 'classroom', loadChildren: './classroom/classroom.module#ClassroomModule' },
      
      ]
  }
];

@NgModule({
  imports: 
    [
      RouterModule.forChild(routes)
    ],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
