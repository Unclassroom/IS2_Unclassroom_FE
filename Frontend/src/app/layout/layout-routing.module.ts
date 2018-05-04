import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard, ManagerGuard } from './../_guards/index';
import { ProfileComponent} from './profile/profile.component';
import { ComentComponent } from './coment/coment.component';
import { LoadrequestComponent } from './loadrequest/loadrequest.component';
import {MycalendarModule} from './mycalendar/mycalendar.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      { path: '', redirectTo: 'profile' },
      // Profile
      { path: 'profile', component: ProfileComponent},
      // Dashboard
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [ManagerGuard] },
      // Recursos
      { path: 'inbox', loadChildren: './inbox/inbox.module#InboxModule', canActivate: [ManagerGuard]},
      { path: 'calendarevent', loadChildren: './calendarevent/calendarevent.module#CalendareventModule', canActivate: [ManagerGuard]},
      // Parametrización
      { path: 'parametrization', loadChildren: './parametrization/parametrization.module#ParametrizationModule', canActivate: [ManagerGuard]},
      // Administración
      { path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [ManagerGuard] },
      { path: 'faculty', loadChildren: './faculty/faculty.module#FacultyModule', canActivate: [ManagerGuard] },
      { path: 'event', loadChildren: './event/event.module#EventModule', canActivate: [ManagerGuard]},
      { path: 'subject', loadChildren: './subject/subject.module#SubjectModule', canActivate: [ManagerGuard]},
      { path: 'group', loadChildren: './group/group.module#GroupModule', canActivate: [ManagerGuard]},
      { path: 'purpose-classroom', loadChildren: './purpose-classroom/purpose-classroom.module#PurposeClassroomModule', canActivate: [ManagerGuard] },
      // Solicitudes
      { path: 'requestbag', loadChildren: './requestbag/requestbag.module#RequestbagModule' },
      { path: 'coment', component: ComentComponent},
      { path: 'loadrequest', component: LoadrequestComponent},

      // Sin clasificar
      { path: 'history', loadChildren: './history/history.module#HistoryModule' },
      { path: 'classroom', loadChildren: './classroom/classroom.module#ClassroomModule' },
      { path: 'mycalendar', loadChildren: './mycalendar/mycalendar.module#MycalendarModule' },
      { path: 'mycalendar', loadChildren: './mycalendar/mycalendar.module#MycalendarModule' },

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
