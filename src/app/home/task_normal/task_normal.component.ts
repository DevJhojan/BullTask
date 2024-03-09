import {  Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-normal',
  standalone: false,
  templateUrl: './task_normal.component.html',
  styleUrls: ['./task_normal.component.css']
})
export class TaskNormalComponent {

  constructor(private _router: Router) { }

  navigate(path: string){
    this._router.navigate(['/home/'+path]);
  }
}
