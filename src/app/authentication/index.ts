import * as Login from './login';

export const routes = [
    ...Login.routes
];

export const navLinks: NavigationConfig = [
    {
        label: 'Authentication',
        children: [
            ...Login.navLinks
        ]
    }
];
