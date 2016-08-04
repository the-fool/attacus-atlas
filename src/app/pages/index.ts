import * as Home from './home';
import * as Profile from './profile';

export const routes = [
  ...Home.routes,
  ...Profile.routes
];

export const navLinks: NavigationConfig = [
  {
    label: 'Pages',
    children: [ ...Home.navLinks, ...Profile.navLinks]
  }
];
