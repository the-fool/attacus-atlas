import * as Home from './home';
import * as Profile from './profile';
import * as R from 'ramda';

export const Routes = [
  ...Home.Routes,
  ...Profile.Routes
];

export const NavLinks: NavigationConfig = [
  {
    label: 'Pages',
    children: <string []>R.map(R.prop('label'), R.concat(Home.NavLinks, Profile.NavLinks))
  },
  ...Home.NavLinks,
  ...Profile.NavLinks
];
