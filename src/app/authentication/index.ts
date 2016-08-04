import * as Login from './login';
import * as GuardedPage from './guarded-page';

export const routes = [
    ...Login.routes,
    ...GuardedPage.routes,
];

export const navLinks: NavigationConfig = [
    {
        label: 'Authentication',
        children: [
            ...Login.navLinks,
            ...GuardedPage.navLinks
        ]
    }
];
