import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './usuarios.component';
import {NgbAlertModule, NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {UsuariosRoutingModule} from './usuarios-routing.module';
import {TablesModule} from '../components/tables/tables.module';
import {Headbuildingonfaculty} from '../models/headbuildingonfaculty';

@NgModule({
  imports: [
    CommonModule,
    NgbCarouselModule.forRoot(),
    NgbAlertModule.forRoot(),
    UsuariosRoutingModule,
    TablesModule
  ],
  declarations: [UsuariosComponent],
  providers: [ Headbuildingonfaculty ],
})
export class UsuariosModule { }
