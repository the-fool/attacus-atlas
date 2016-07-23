import { Component } from '@angular/core';

import { VerticalNavigation } from '../../navigation';

@Component({
  selector: 'vertical-layout',
  directives: [VerticalNavigation],
  template: `
  <div class="container">
    <vertical-navigation></vertical-navigation>
    <h1>Vertical</h1>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
export class VerticalLayout{};
