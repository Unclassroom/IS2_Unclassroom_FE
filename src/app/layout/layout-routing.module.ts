import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard, ManagerGuard, TeacherGuard } from './../_guards/index';
import { ProfileComponent} from './profile/profile.component';
import { ComentComponent } from './coment/coment.component';
import { LoadrequestComponent } from './loadrequest/loadrequest.component';
import { DamagerecordComponent } from './damagerecord/damagerecord.component';
import { MycalendarModule} from './mycalendar/mycalendar.module';
import { ComentregComponent } from './comentreg/comentreg.component';
import { DamageregComponent } from './damagereg/damagereg.component';

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
      { path: 'loadrequest', component: LoadrequestComponent},
      // Administración
      { path: 'users', loadChildren: './users/users.module#UsersModule', canActivate: [ManagerGuard] },
      { path: 'faculty', loadChildren: './faculty/faculty.module#FacultyModule', canActivate: [ManagerGuard] },
      { path: 'event', loadChildren: './event/event.module#EventModule', canActivate: [ManagerGuard]},
      { path: 'subject', loadChildren: './subject/subject.module#SubjectModule', canActivate: [ManagerGuard]},
      { path: 'group', loadChildren: './group/group.module#GroupModule', canActivate: [ManagerGuard]},
      { path: 'purpose-classroom', loadChildren: './purpose-classroom/purpose-classroom.module#PurposeClassroomModule', canActivate: [ManagerGuard] },
      // Solicitudes
      { path: 'requestbag', loadChildren: './requestbag/requestbag.module#RequestbagModule', canActivate: [TeacherGuard]},
      //Comentarios
      { path: 'coment', component: ComentComponent},
      { path: 'comentreg', component: ComentregComponent},
      //Daños
      { path: 'damagerecord', component: DamagerecordComponent},
      { path: 'damagereg', component: DamageregComponent},
      // Sin clasificar
      { path: 'history', loadChildren: './history/history.module#HistoryModule' },
      { path: 'mycalendar', loadChildren: './mycalendar/mycalendar.module#MycalendarModule' },
      { path: 'mycalendar', loadChildren: './mycalendar/mycalendar.module#MycalendarModule' },
      { path: 'building', loadChildren: './building/building.module#BuildingModule' },
      { path: 'schedule', loadChildren: './schedule/schedule.module#ScheduleModule' },

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
