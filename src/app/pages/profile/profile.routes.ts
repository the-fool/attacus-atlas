import { RouterConfig } from '@angular/router';

import { Profile } from './profile.component';

export const ProfileRoutes: RouterConfig = [
  {
    path: '/profile',
    component: Profile,
    outlet: 'page'
  }
];

export const ProfileNav: NavigationConfig = [
  {
    path: '/profile',
    label: 'Profile',
    order: 1
  }
];
