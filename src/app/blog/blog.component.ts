import { Component } from '@angular/core';
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
export class Blog {

}
