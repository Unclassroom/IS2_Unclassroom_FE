import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ComentRoutingModule } from './coment-routing.module';
import { ComentComponent } from './coment.component';

@NgModule({
  imports: [
    CommonModule,
    ComentRoutingModule
  ],
  declarations: [RegisterComponent, ComentModule]
})
export class ComentModule { }
