import { RouterConfig } from '@angular/router';

import { Home } from './home.component';

export const Routes: RouterConfig = [
  {
    path: 'home',
    component: Home,
  }
];

export const NavLinks: NavigationConfig = [
  {
    path: '/home',
    label: 'Homie',
    order: 2
  }
];
