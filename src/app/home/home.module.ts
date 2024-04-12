import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TaskNormalComponent } from './task_normal/task_normal.component';
import { ImportantUrgentComponent } from './important-urgent/important-urgent.component';
import { ImportantNoUrgentComponent } from './important-no-urgent/important-no-urgent.component';
import { NoImportantUrgentComponent } from './no-important-urgent/no-important-urgent.component';
import { NoImportantNoUrgentComponent } from './no-important-no-urgent/no-important-no-urgent.component';
import { SharedModule } from '@shared/shared.module';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    HomeComponent,
    TaskNormalComponent,
    ImportantUrgentComponent,
    ImportantNoUrgentComponent,
    NoImportantUrgentComponent,
    NoImportantNoUrgentComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatDialogModule,
  ]
})
export class HomeModule { }
