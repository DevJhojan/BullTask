import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalTaskComponent } from '@shared/modal-task/modal-task.component';
@Component({
  selector: 'app-important-urgent',
  templateUrl: './important-urgent.component.html',
  styleUrls: ['./important-urgent.component.css']
})
export class ImportantUrgentComponent {
  constructor(public matDialog: MatDialog){}
  addTask(){
    const modalDialog = this.matDialog.open(ModalTaskComponent, {
      width: '300px',
      height: '400px',
      hasBackdrop: false,
      data: {
        name_task: 'hola',
        description_task: 'saludo'
      }
    });
    modalDialog.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}
