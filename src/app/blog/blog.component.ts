import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';
import { BlogService } from './blog.service';
import { RecentList } from './recent-list';
import { Archive } from './archive';


@Component({
  selector: 'blog',
  templateUrl: 'blog.template.html',
  directives: [
    RecentList,
    Archive,
    ...ROUTER_DIRECTIVES
  ],
  providers: [
    BlogService
  ]
})
export class Blog implements OnInit {
  private postings: PostingMeta[];
  constructor(
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.blogService.getPostings().subscribe(res => {
      this.postings = res;
      console.log(res);
    })
  }
  gotoPosting(postingMeta: PostingMeta) {
    const link = ['/posting', postingMeta.dir];
    this.router.navigate(link);
  }
}
