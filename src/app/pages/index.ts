import * as Home from './home';
import * as Profile from './profile';

export const Routes = [
  ...Home.Routes,
  ...Profile.Routes
];

export const NavLinks = [
  ...Home.NavLinks,
  ...Profile.NavLinks
];
