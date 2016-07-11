import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogService {
  constructor(private http: Http) { }
  private postingsUrl = '/assets/postings';
  getPostings(): Observable<PostingMeta[]> {
    console.log('Get postings');
    return this.http
      .get(`${this.postingsUrl}/index.json`)
      .map(res => res.json().postings);
  }

  fetchPosting(dir: string): Observable<string> {
    return this.http
      .get(`${this.postingsUrl}/${dir}/post.html`)
      .map(res => res.text())
  }
}
