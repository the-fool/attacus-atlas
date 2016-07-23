import { Component, OnInit } from '@angular/core';

import { NavigationService } from './navigation.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.template.html',
  providers: [NavigationService]
})
export class Navigation implements OnInit {
  navLinks: Link[];
  constructor(private navService: NavigationService) {}

  ngOnInit() {
    this.navLinks = this.navService.links;
  }
};
