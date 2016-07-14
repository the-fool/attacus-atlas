import { WebpackAsyncRoute } from '@angularclass/webpack-toolkit';
import { RouterConfig } from '@angular/router';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Blog } from './blog.component';
import { Posting } from './posting';
import { RecentList } from './recent-list';
import { Archive } from './archive';

export const routes: RouterConfig = [
  {
    path: 'blog',
    component: Blog,
    children: [
      { path: '', component: RecentList },
      { path: 'posting/:dir', component: Posting},
      { path: '', component: Archive, outlet: 'left'}
    ]
  }
];

export const asyncRoutes: AsyncRoutes = {
  'Blog': require('es6-promise-loader!./index'),
  'Posting': require('es6-promise-loader!./posting'),
};
