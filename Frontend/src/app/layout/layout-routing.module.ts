import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import {PurposeClassroomModule} from './purpose-classroom/purpose-classroom.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'inbox', loadChildren: './inbox/inbox.module#InboxModule' },
      { path: 'history', loadChildren: './history/history.module#HistoryModule' },
      { path: 'parametrization', loadChildren: './parametrization/parametrization.module#ParametrizationModule' },
      { path: 'classroom', loadChildren: './classroom/classroom.module#ClassroomModule' },
      { path: 'users', loadChildren: './users/users.module#UsersModule' },
      { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarModule' },
      { path: 'requestbag', loadChildren: './requestbag/requestbag.module#RequestbagModule' },
      { path: 'event', loadChildren: './event/event.module#EventModule' },
      { path: 'faculty', loadChildren: './faculty/faculty.module#FacultyModule' },
      { path: 'group', loadChildren: './group/group.module#GroupModule' },
      { path: 'subject', loadChildren: './subject/subject.module#SubjectModule' },
      { path: 'purpose-classroom', loadChildren: './purpose-classroom/purpose-classroom.module#PurposeClassroomModule' },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
