import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DateitemDirective} from './dateitem.directive';


@NgModule({
  imports: [
    CommonModule,
    DateitemDirective
  ],
  declarations: [DateitemDirective]
})
export class DateitemModule { }
