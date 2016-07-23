import { Component } from '@angular/core';

@Component({
  selector: 'horizontal-layout',
  template: `
  <div class="container">
    <router-outlet name="navigation"></router-outlet>
    <h1>Horizontal</h1>
    <main>
      <router-outlet name="page"></router-outlet>
    </main>
  </div>
  `
})
export class HorizontalLayout{};
