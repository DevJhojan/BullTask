import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { TaskNormalComponent } from './task_normal/task_normal.component';
import { ImportantUrgentComponent } from './important-urgent/important-urgent.component';
import { ImportantNoUrgentComponent } from './important-no-urgent/important-no-urgent.component';
import { NoImportantUrgentComponent } from './no-important-urgent/no-important-urgent.component';
import { NoImportantNoUrgentComponent } from './no-important-no-urgent/no-important-no-urgent.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'task_normal',
        pathMatch: 'full'
      },
      {
        path: 'task_normal',
        title: 'Tasks',
        component: TaskNormalComponent
      },
      {
        path: 'important_urgent',
        title: 'Important & Urgent',
        component: ImportantUrgentComponent
      },
      {
        path: 'important_no_urgent',
        title: 'Important & No Urgent',
        component: ImportantNoUrgentComponent,
      },
      {
        path:'no_important_urgent',
        title: 'No Important & Urgent',
        component: NoImportantUrgentComponent,
      },
      {
        path: 'no_important_no_urgent',
        title: 'No Important & No Urgent',
        component: NoImportantNoUrgentComponent
      },
      {
        path: '**',
        redirectTo: 'task_normal'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
