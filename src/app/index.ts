// App
export * from './app.component';
export * from './app.service';
export * from './app.routes';

import { AuthService } from './core/auth';
import { AuthGuard } from './core/auth/auth-guard.service'
import { AppState } from './app.service';

import { appNavLinks } from './app.routes';
import { provideNavigation } from './navigation/navigation.service';

// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  AuthGuard,
  AuthService,
  provideNavigation(appNavLinks)
];
