import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'recent-list',
  templateUrl: 'recent-list.template.html'
})
export class RecentList implements OnInit {
  private postings: PostingMeta[];
  constructor(private blogService: BlogService) {}

  ngOnInit() {
    this.blogService.getPostings().subscribe(res => {
      this.postings = res;
      console.log(res);
    })
  }
  

}
