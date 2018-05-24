import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TablesComponent} from './tables.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TablesComponent],
  exports: [TablesComponent]
})

export class TablesModule { }
