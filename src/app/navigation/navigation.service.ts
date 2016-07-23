import { Injectable, OpaqueToken, Inject } from '@angular/core';

const NAV_LINKS = new OpaqueToken('NAV_LINKS');

@Injectable()
export class NavigationService {
  constructor(
    @Inject(NAV_LINKS) private navLinks: Link[]
  ) {
    this.navLinks;
  }

  getConfig(): NavigationConfig {
    return this.navLinks;
  }
}


export function provideNavigation(navLinks: NavigationConfig) {
  return [
    {provide: NAV_LINKS, useValue: navLinks}
  ];
};
