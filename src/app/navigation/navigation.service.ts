import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { both, compose, curry, filter, find, has, identity, ifElse,
  isEmpty, lensProp, map, not, prop, propEq, set, sortBy } from 'ramda';
const NAV_LINKS = new OpaqueToken('NAV_LINKS');

@Injectable()
export class NavigationService {
  constructor(
    @Inject(NAV_LINKS) private _navLinks: Link[]
  ) {

    const sortByOrder = sortBy(prop('order'));
    const childrenLens = lensProp('children');
    const findByLabel = curry((children: Link[], label) => find(propEq('label', label), children));
    const setChildren = curry((population: Link[], parent: Link) => set(
      childrenLens,
      sortByOrder(map(findByLabel(population), parent.children)),
      parent));

    const isParent = both(
      has('children'),
      compose(not, isEmpty, prop('children'))
    );
    this._navLinks = sortByOrder(
      map<Link, Link>(
        set(lensProp('isParent'), true),
        filter(isParent, _navLinks))
        );
    console.log(this._navLinks);
  }

  get links() {
    return this._navLinks;
  }
}


export function provideNavigation(navLinks: NavigationConfig) {
  return [
    { provide: NAV_LINKS, useValue: navLinks }
  ];
};
