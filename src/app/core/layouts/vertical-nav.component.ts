import { Component } from '@angular/core';
import { VerticalNavigation } from '../../navigation';

const style = require('./vertical-nav.styl');

@Component({
  selector: 'vertical-layout',
  directives: [VerticalNavigation],
  styles: [style],
  template: `
  <div id="vertical-nav-layout" class="container">
    <vertical-navigation></vertical-navigation>
    <main>
      <router-outlet></router-outlet>
    </main>
  </div>
  `
})
export class VerticalLayout{};
