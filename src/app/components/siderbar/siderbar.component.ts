import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

interface Menu {
  title: string;
  link: string;
}
interface Habit {
  title: string;
  icon: string;
  counter: number;
}

@Component({
  selector: 'siderbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'siderbar.component.html',
  styleUrls: ['./siderbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderbarComponent implements OnInit {
  menus: Menu[] = [
    {
      title: 'Tasks',
      link: '/Tasks',
    },
    {
      title: 'Processes',
      link: '/Constant_Task',
    },
  ];

  habits: Habit[] = [
    {
      title: 'Make the bet',
      icon: '/assets/img/Habits_home.png',
      counter: 0,
    },
    {
      title: 'Do Exercises',
      icon: '/assets/img/Habits_excercise.png',
      counter: 0,
    },
  ];

  ngOnInit(): void {}

  aumentCounterHabit(habit: Habit): void {
    habit.counter++;
  }

  addHabit() {}
}
