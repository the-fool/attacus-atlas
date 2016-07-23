import { RouterConfig } from '@angular/router';

import { Profile } from './profile.component';

export const Routes: RouterConfig = [
  {
    path: 'profile',
    component: Profile,
  }
];

export const NavLinks: NavigationConfig = [
  {
    path: '/profile',
    label: 'Profile',
    order: 1
  }
];
