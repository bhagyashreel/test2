import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { Working1Component } from './working1/working1.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'working1',
    pathMatch: 'full'
  },
  {
    path: 'working1',
    component: Working1Component
  },

];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [Working1Component]
})
export class WorkingModule { }
