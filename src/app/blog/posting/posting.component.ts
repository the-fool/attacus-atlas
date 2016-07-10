import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { BlogService } from '../blog.service';

@Component({
  selector: 'posting',
  template: `
    <h3>A posting</h3>
    <div [innerHtml]="innerHtml"></div>
  `,
  providers: [
    BlogService
  ]
})
export class Posting implements OnInit {
  private innerHtml: String;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      let dir = params['dir'];
      this.blogService.fetchPosting(dir).subscribe(res => {
        this.innerHtml = res;
      });
    });
  }

}
