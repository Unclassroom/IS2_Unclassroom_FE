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
      { path: 'buzonentrada', loadChildren: './buzonentrada/buzonentrada.module#BuzonentradaModule' },
      { path: 'historial', loadChildren: './historial/historial.module#HistorialModule' },
      { path: 'parametrizacion', loadChildren: './parametrizacion/parametrizacion.module#ParametrizacionModule' },
      { path: 'salones', loadChildren: './salones/salones.module#SalonesModule' },
      { path: 'usuarios', loadChildren: './usuarios/usuarios.module#UsuariosModule' },
      { path: 'calendario', loadChildren: './calendario/calendario.module#CalendarioModule' },
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
