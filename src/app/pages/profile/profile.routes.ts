import { RouterConfig } from '@angular/router';

import { Profile } from './profile.component';

export const routes: RouterConfig = [
  {
    path: 'profile',
    component: Profile,
  }
];

export const navLinks: NavigationConfig = [
  {
    path: '/profile',
    label: 'Profile',
    order: 1
  }
];
