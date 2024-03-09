import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TaskNormalComponent } from './task_normal/task_normal.component';


@NgModule({
  declarations: [
    HomeComponent,
    TaskNormalComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
