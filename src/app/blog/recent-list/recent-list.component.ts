import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'recent-list',
  templateUrl: 'recent-list.template.html'
})
export class RecentList {
  @Input() postings: PostingMeta[];
  @Output() onClick = new EventEmitter<PostingMeta>();

  clickLink(posting: PostingMeta) {
    console.log(posting);
    this.onClick.emit(posting);
  }
}
