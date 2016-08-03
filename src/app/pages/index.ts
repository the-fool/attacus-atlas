import * as Home from './home';
import * as Profile from './profile';
import { concat, map, prop } from 'ramda';

export const Routes = [
  ...Home.Routes,
  ...Profile.Routes
];

export const NavLinks: NavigationConfig = [
  {
    label: 'Pages',
    children:  <string []>map(prop('label'), concat(Home.NavLinks, Profile.NavLinks))
  },
  ...Home.NavLinks,
  ...Profile.NavLinks
];
