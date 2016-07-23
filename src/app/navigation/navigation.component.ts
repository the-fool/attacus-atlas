import { Component, OnInit } from '@angular/core';

import { NavigationService } from './navigation.service';

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
  templateUrl: './navigation.template.html',
  providers: [NavigationService]
})
export class VerticalNavigation implements OnInit {
  navLinks: Link[];
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.navLinks = this.navService.links;
  }
};
