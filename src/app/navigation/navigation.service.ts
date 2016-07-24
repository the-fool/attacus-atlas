import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { sortBy, prop, clone } from 'ramda';

const NAV_LINKS = new OpaqueToken('NAV_LINKS');

@Injectable()
export class NavigationService {
  constructor(
    @Inject(NAV_LINKS) private _navLinks: Link[]
  ) {
    this._navLinks = sortBy(prop('order'), _navLinks);
  }

  get links() {
    return clone(this._navLinks);
  }
}


export function provideNavigation(navLinks: NavigationConfig) {
  return [
    {provide: NAV_LINKS, useValue: navLinks}
  ];
};
