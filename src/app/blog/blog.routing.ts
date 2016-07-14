import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';

export const routes: RouterConfig = [
  {
    path: 'blog',
    component: 'Blog'
  }
];

export const asyncRoutes: AsyncRoutes = {
  'Blog': require('es6-promise-loader!./index'),
};
