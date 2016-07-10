import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'posting',
  template: `
    <h3>A posting</h3>
  `
})
export class Posting implements OnInit {
  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.route);
  }

}
