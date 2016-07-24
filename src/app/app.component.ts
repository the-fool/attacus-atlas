/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

import { AppState } from './app.service';
import { ThemePalette } from './core/theme-palette';
const globalStyle = require('./app.styl');
/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [globalStyle],
  directives: [ThemePalette],
  template: `
    <router-outlet></router-outlet>

    <pre class="app-state">this.appState.state = {{ appState.state | json }}</pre>

    <footer>
      <div>
        <a [href]="url">
          <img [src]="bigButterfly" width="25%">
        </a>
      </div>
    </footer>
    <theme-palette></theme-palette>
  `
})
export class App {
  bigButterfly = 'assets/img/big_moth.jpg';
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(
    public appState: AppState) {

  }

  ngOnInit() {
    console.log('Initial App State', this.appState.state);
  }

}

/*
 * Please review the https://github.com/AngularClass/angular2-examples/ repo for
 * more angular app examples that you may copy/paste
 * (The examples may not be updated as quickly. Please open an issue on github for us to update it)
 * For help or questions please contact us at @AngularClass on twitter
 * or our chat on Slack at https://AngularClass.com/slack-join
 */
