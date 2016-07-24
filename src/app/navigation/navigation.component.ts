import { Component, OnInit } from '@angular/core';

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
  selector: 'vertical-navigation',
  templateUrl: './navigation.vertical.template.html',
  providers: [NavigationService],
  styles: [verticalStyle]
})
export class VerticalNavigation implements OnInit {
  navLinks: Link[];
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.navLinks = this.navService.links;
  }
};
