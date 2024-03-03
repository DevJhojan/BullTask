import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'time-bomb',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>TimeBomb works!</p>`,
  styleUrls: ['./TimeBomb.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeBombComponent { }
