import { RouterConfig } from '@angular/router';

import { Home } from './home.component';

export const HomeRoutes: RouterConfig = [
  {
    path: '/home',
    component: Home,
    outlet: 'page'
  }
];

export const HomeNav: NavigationConfig = [
  {
    path: '/home',
    label: 'Homie',
    order: 2
  }
];
