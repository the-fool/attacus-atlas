import { Component } from '@angular/core';

import { Navigation } from '../../navigation';

@Component({
  selector: 'horizontal-layout',
  directives: [Navigation],
  template: `
  <div class="container">
    <navigation></navigation>
    <h1>Horizontal</h1>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
export class HorizontalLayout{};
