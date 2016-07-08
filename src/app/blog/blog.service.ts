import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogService {
  constructor(private http: Http) {}
  private postingsUrl = '/assets/postings/index.json';

  getPostings(): Observable<PostingMeta[]>  {
    console.log('Get postings');
    return this.http.get(this.postingsUrl)
                    .map(res => res.json().postings);
  }
}
