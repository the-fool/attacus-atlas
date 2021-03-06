import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { HorizontalLayout, VerticalLayout } from './core/layouts';

import * as Pages from './pages';
import * as Layouts from './layouts';
import * as Authentication from './authentication';

import { NoContent } from './no-content';

import { DataResolver } from './app.resolver';

import { routes as blogRoutes, asyncRoutes as blogAsyncRoutes } from './blog/blog.routing';

import { prop, compose, split, find, trim, equals, nth, ifElse, identity } from 'ramda';

export const appNavLinks: NavigationConfig = [
  ...Pages.navLinks,
  ...Layouts.navLinks,
  ...Authentication.navLinks,
];

const layout = compose(
    ifElse(identity, compose(nth(1), split('=')), identity),
    find(compose(equals('layout'), trim, nth(0), split('='))),
    split(';')
  )(document.cookie);

const layouts = {
  'horizontal': HorizontalLayout,
  'vertical' : VerticalLayout
};

export const routes: RouterConfig = [
  {
    path: '',
    component: layouts[layout],
    children: [
      ...Pages.routes,
      ...Authentication.routes
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
