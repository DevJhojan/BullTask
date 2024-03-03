import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, type OnInit } from '@angular/core';

@Component({
  selector: 'siderbar',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `
    <nav>
      <ul>
        <li>
          <h4>Menu</h4>
        </li>
      </ul>
    </nav>
    <nav>
      <ul>
        <li>
          <h5>Habitos</h5>
        </li>
      </ul>
    </nav>
  `,
  styleUrls: ['./siderbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiderbarComponent implements OnInit {

  ngOnInit(): void { }

}
