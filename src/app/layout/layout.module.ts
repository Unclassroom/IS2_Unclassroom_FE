import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LayoutRoutingModule } from './layout-routing.module';
import { FalcultyService } from './services/falculty.service';
import { BuildingService } from './services/building.service';
import {HeadBuildingService} from './services/head-building.service';
import { ManagerService } from './services/manager.service';
import { TeacherService } from './services/teacher.service';
import { ExternalPersonService } from './services/external-person.service';
import { DepartmentsService } from './services/departments.service';
import { ClassroomService } from './services/classroom.service';
import { GroupService } from './services/group.service';
import { SubjectService } from './services/subject.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md/index';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    LayoutRoutingModule
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent, BreadcrumbComponent],
  providers: [FalcultyService, HeadBuildingService, BuildingService, ManagerService, TeacherService, ExternalPersonService, DepartmentsService, ClassroomService, GroupService, SubjectService]
})
export class LayoutModule { }
