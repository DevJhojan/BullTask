import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
interface IModelTask{
  name_task: string;
  description_task: string;
  date_task: string;
  time_task: string;
  cheking_task: boolean;
}
@Component({
  selector: 'app-modal-task',
  templateUrl: './modal-task.component.html',
  styleUrls: ['./modal-task.component.css']
})

export class ModalTaskComponent {
  formTask:FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ModalTaskComponent>,
    private _fBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) private _data: IModelTask,
  ){
    this.formTask = this._fBuilder.group({
      name_task:[],
      description_task:[],
    })

  }

  onClickCreate(){
    this._data = {
      name_task: this.formTask.value.name_task,
      description_task: this.formTask.value.description_task,
      date_task: Date.now().toString(),
      time_task: Date.now().toString(),
      cheking_task: false,
    }
  }
}
