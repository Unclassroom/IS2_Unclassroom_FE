import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from './landing.component';
import {SectioninfoComponent} from './components/sectioninfo/sectioninfo.component';

const routes: Routes = [
  {
    path: '', component: LandingComponent,
    children: [
      { path: '', component: SectioninfoComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
