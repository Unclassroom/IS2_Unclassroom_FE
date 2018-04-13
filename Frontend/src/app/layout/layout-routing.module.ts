import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

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
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
