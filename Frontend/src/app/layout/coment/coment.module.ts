import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentRoutingModule } from './coment-routing.module';
import { ComentComponent } from './coment.component';

@NgModule({
  imports: [
    CommonModule,
    ComentRoutingModule
  ],
  declarations: [ ComentModule]
})
export class ComentModule { }
