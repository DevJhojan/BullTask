import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <main class="row">
      <siderbar></siderbar>
      <router-outlet></router-outlet>
      <time-bomb></time-bomb>
    </main>
  `,
  styles: []
})
export class AppComponent {
  title = 'BullTask';
}
