import { RouterConfig } from '@angular/router';

import { Home } from './home.component';

export const routes: RouterConfig = [
  {
    path: 'home',
    component: Home,
  }
];

export const navLinks: NavigationConfig = [
  {
    path: '/home',
    label: 'Homie',
    order: 2
  }
];
