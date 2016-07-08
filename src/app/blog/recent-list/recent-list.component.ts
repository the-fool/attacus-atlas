import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'recent-list',
  templateUrl: 'recent-list.template.html'
})
export class RecentList {
  @Input() postings: PostingMeta[];
}
