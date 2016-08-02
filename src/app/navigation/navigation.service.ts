import { Injectable, OpaqueToken, Inject } from '@angular/core';
import { sortBy, prop, clone } from 'ramda';
import { curry, lensProp, map, ifElse, identity, both, has, not, compose, isEmpty, prop, filter } from 'ramda';
const NAV_LINKS = new OpaqueToken('NAV_LINKS');

@Injectable()
export class NavigationService {
  constructor(
    @Inject(NAV_LINKS) private _navLinks: Link[]
  ) {
    const a = [
      {
        id: '1',
        children: []
      },
      {
        id: '2',
        children: [
          '1', '3'
        ]
      },
      {
        id: '3',
        children: [
          '4'
        ]
      },
      {
        id: '4',
        children: ['5']
      },
      {
        id: '5'
      }
    ];
    const sortByOrder = sortBy(prop('order'));
    this._navLinks = sortByOrder(_navLinks);
    const childrenLens = lensProp('children');
    const findById = curry((a, id) => find(propEq('id', id), a));
    const setChildren = curry((a, parent) => set(
      childrenLens,
      map(compose(ifElse(isParent, setChildren(a), identity), findById(a)), parent.children),
      parent)
    );
    const isParent = both(
      has('children'),
      compose(not, isEmpty, prop('children'))
    );

    map(setChildren(a), filter(isParent, a));
  }

  get links() {
    return clone(this._navLinks);
  }
}


export function provideNavigation(navLinks: NavigationConfig) {
  return [
    { provide: NAV_LINKS, useValue: navLinks }
  ];
};
