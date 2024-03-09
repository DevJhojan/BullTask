import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`main{padding: 1rem;}`]
})
export class HomeComponent {

}
