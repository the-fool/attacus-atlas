import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { HorizontalLayout } from './core/layouts';

import { Home, HomeNav, Profile, ProfileNav } from './pages';

import { Navigation } from './navigation';

import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

import { routes as blogRoutes, asyncRoutes as blogAsyncRoutes } from './blog/blog.routing';

import * as R from 'ramda';

export const AppNavLinks: NavigationConfig = [
  ...HomeNav,
  ...ProfileNav
];

const layout = R.compose(
    (cookie: string): any => cookie ? R.split('=', cookie)[1] : cookie,
    R.find<string>(
      R.compose(
        (s: string[]): boolean => s[0] === 'layout',
        (s: string): string[] => s.split('=')
      ))
    )(R.split(';', document.cookie)) || 'horizontal';

const layouts = {
  'horizontal': HorizontalLayout,
  'vertical' : null
};

export const routes: RouterConfig = [
  {
    path: '',
    component: layouts[layout],
    children: [
      {
        path: 'home',
        component: Home
      },
      {
        path: 'profile',
        component: Profile
      }
    ]
  },
  // async components with children routes must use WebpackAsyncRoute
  {
    path: 'detail', component: 'Detail',
    canActivate: [WebpackAsyncRoute],
    children: [
      { path: '', component: 'Index' }  // must be included
    ]
  },
  ...blogRoutes,
  { path: '**', component: NoContent },
];

// Async load a component using Webpack's require with es6-promise-loader and webpack `require`
// asyncRoutes is needed for our @angularclass/webpack-toolkit that will allow us to resolve
// the component correctly

export const asyncRoutes: AsyncRoutes = Object.assign(
  {
    // we have to use the alternative syntax for es6-promise-loader to grab the routes
    'About': require('es6-promise-loader!./about'),
    'Detail': require('es6-promise-loader!./+detail'),
    'Index': require('es6-promise-loader!./+detail'), // must be exported with detail/index.ts
  }
);


// Optimizations for initial loads
// An array of callbacks to be invoked after bootstrap to prefetch async routes
export const prefetchRouteCallbacks: Array<IdleCallbacks> = [
  asyncRoutes['About'],
  asyncRoutes['Detail'],
];


// Es6PromiseLoader and AsyncRoutes interfaces are defined in custom-typings
