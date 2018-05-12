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
import { RequestService } from './services/request.service';
import { EventService } from './services/event.service';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import {MDBBootstrapModule} from 'angular-bootstrap-md/index';
import {MessageService} from './services/message.service';
import { FormsModule } from '@angular/forms';
import {PurposeClassroomService} from './services/purpose-classroom.service';
import {TypeClassroomService} from './services/type-classroom.service';
import { SampleModule } from 'angular-pdf-generator';
import { ProfileComponent } from './profile/profile.component';
import { ComentComponent } from './coment/coment.component';
import { LoadrequestComponent } from './loadrequest/loadrequest.component';
import { DamagerecordComponent } from './damagerecord/damagerecord.component';
import { ComentregComponent } from './comentreg/comentreg.component';
import { OpinionService } from './services/opinion.service';

@NgModule({
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    LayoutRoutingModule,
    FormsModule,
    SampleModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    ProfileComponent, ComentComponent, LoadrequestComponent, DamagerecordComponent, ComentregComponent],
  providers: [
    FalcultyService, HeadBuildingService,  RequestService, BuildingService,
    ManagerService, TeacherService, ExternalPersonService, DepartmentsService,
    ClassroomService, GroupService, SubjectService, MessageService, EventService,
    PurposeClassroomService, TypeClassroomService, OpinionService ]
})
export class LayoutModule { }
