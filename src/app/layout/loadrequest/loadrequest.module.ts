import { NgModule, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadrequestComponent } from './loadrequest.component';
import { LoadrequestRoutingModule } from './loadrequest-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoadrequestRoutingModule,
    LoadrequestComponent
  ],
  declarations: [LoadrequestComponent, LoadrequestRoutingModule]
})
export class LoadrequestModule { 



}