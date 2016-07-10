import { Component, Input } from '@angular/core';

@Component({
  selector: 'archive',
  templateUrl: 'archive.template.html'
})
export class Archive {
  @Input() private postings: PostingMeta[]; 
}
