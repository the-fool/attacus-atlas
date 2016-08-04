import { RouterConfig } from '@angular/router';
import { Login } from './login.component';

export const routes: RouterConfig = [
    {
        path: 'login',
        component: Login
    }
];

export const navLinks: NavigationConfig = [
    {
        path: '/login',
        label: 'Login'
    }
];
