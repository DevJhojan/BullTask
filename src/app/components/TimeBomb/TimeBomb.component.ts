import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {interval, Subscription} from 'rxjs';
@Component({
  selector: 'time-bomb',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  template: `
    <article>
      <h3>Bomb Time</h3>
      <label for="counter">La bomba esplotara en {{timeRest}} minutos</label>
      <input type="text" name="counter" id="counter" [(ngModel)]="timeRest" >
      <button (click)="start()">
        Start
      </button>
      <h2> {{timeRest}} </h2>
    </article>
  `,
  styleUrls: ['./TimeBomb.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeBombComponent implements OnInit {
  timeRest: number = 0;
  interval: any;
  private subscription: Subscription = new Subscription();;
  ngOnInit(): void {

  }
  start(){
    this.subscription = interval(1000).subscribe(() => {
      if(this.timeRest > 0){
        this.timeRest--;
      }
      else{
        this.stopTimer();
      }
    })
  }
  stopTimer() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
