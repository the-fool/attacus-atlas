import { Injectable, OpaqueToken, Inject } from '@angular/core';
const R = require('ramda');

const NAV_LINKS = new OpaqueToken('NAV_LINKS');

@Injectable()
export class NavigationService {
  constructor(
    @Inject(NAV_LINKS) private _navLinks: Link[]
  ) {
    this._navLinks = R.sortBy(R.prop('order'))(_navLinks);
  }

  get links() {
    return R.clone(this._navLinks);
  }
}


export function provideNavigation(navLinks: NavigationConfig) {
  return [
    {provide: NAV_LINKS, useValue: navLinks}
  ];
};
