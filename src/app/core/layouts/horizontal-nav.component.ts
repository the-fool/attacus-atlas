import { Component } from '@angular/core';

import { HorizontalNavigation } from '../../navigation';

@Component({
  selector: 'horizontal-layout',
  directives: [HorizontalNavigation],
  template: `
  <div class="container">
    <horizontal-navigation></horizontal-navigation>
    <h1>Horizontal</h1>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
export class HorizontalLayout{};
