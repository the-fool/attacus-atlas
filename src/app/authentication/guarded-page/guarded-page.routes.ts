import { RouterConfig } from '@angular/router';
import { GuardedPage } from './guarded-page.component';
import { AuthGuard } from '../../core/auth/auth-guard.service';

export const routes: RouterConfig = [
    {
        path: 'guarded-page',
        component: GuardedPage,
        canActivate: [AuthGuard]
    }
];

export const navLinks: NavigationConfig = [
    {
        path: '/guarded-page',
        label: 'Guarded Page'
    }
];
