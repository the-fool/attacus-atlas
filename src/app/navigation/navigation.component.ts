import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

import { NavigationService } from './navigation.service';
const verticalStyle = require('./navigation.vertical.style.styl');

@Component({
  selector: 'horizontal-navigation',
  templateUrl: './navigation.template.html',
  providers: [NavigationService]
})
export class HorizontalNavigation implements OnInit {
  navLinks: Link[];
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.navLinks = this.navService.links;
  }
};

@Component({
  selector: 'vertical-nav-node',
  encapsulation: ViewEncapsulation.None,
  directives: [VerticalNavNode],
  template: `
  <li>
    <a *ngIf="node.path" class="nav-item nav-link" [routerLink]="[node.path]">
      <span class="nav-title">
        {{node.label}}
      </span>
    </a>
    <a *ngIf="!node.path" class="nav-item nav-link">
      <span class="nav-title">
        {{node.label}}
      </span>
    </a>
    <ng-content></ng-content>
  </li>
  `
})
class VerticalNavNode {
  @Input() node: Link
};

@Component({
  selector: 'vertical-navigation',
  templateUrl: './navigation.vertical.template.html',
  providers: [NavigationService],
  directives: [VerticalNavNode],
  styles: [verticalStyle],
  encapsulation: ViewEncapsulation.None
})
export class VerticalNavigation implements OnInit {
  navLinks: Link[];
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.navLinks = this.navService.links;
    console.log(this.navLinks);
  }
};
