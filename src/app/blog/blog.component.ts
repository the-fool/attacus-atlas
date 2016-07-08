import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';
import { RecentList } from './recent-list';


@Component({
  selector: 'blog',
  templateUrl: 'blog.template.html',
  directives: [
    RecentList
  ],
  providers: [
    BlogService
  ]
})
export class Blog implements OnInit {
  private postings: PostingMeta[];
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPostings().subscribe(res => {
      this.postings = res;
      console.log(res);
    })
  }
}
