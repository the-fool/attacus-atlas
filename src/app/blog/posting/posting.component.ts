import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ComponentResolver, ComponentFactory, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
const style = require('./posting.style');
import { BlogService } from '../blog.service';
import { XLarge } from './x-large';
import { Sector } from './sector';
import { SectorService } from './sector.service';


@Injectable()
class PostingBodyBuilder {
  public CreateComponent(tmpl: string, injectDirectives?: any[]) {
    @Component({
      selector: 'posting-body',
      template: tmpl,
      directives: injectDirectives,
    })
    class PostingBody { };
    return PostingBody;
  }
}
@Component({
  selector: 'index-list',
  template: `
    <ul>
      <li *ngFor="let i of index"><button type="button" class="btn btn-info">{{i}}</button></li>
    </ul>
    <div class="dropdown">
    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      Dropdown
    </button>
    <div class="dropdown-menu" aria-labelledby="dropdownMenu1">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
    </div>

  </div>
  `
})
class TodoList{
  @Input() index: string[] = [];
}


@Component({
  selector: 'posting',
  templateUrl: 'posting.template.html',
  styles: [style],
  providers: [
    BlogService,
    PostingBodyBuilder,
    SectorService
  ],
  directives: [
    TodoList,
    XLarge,
    Sector
  ],
})
export class Posting implements OnInit {
  private sectorNames: string[] = [];
  private todos$: Observable<string>;
  private buffer: string[] = [];
  @ViewChild(
    'postingBody',
    { read: ViewContainerRef }
  )
  protected dynamicPostingBodyTarget: ViewContainerRef;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService,
    private componentResolver: ComponentResolver,
    private postingBodyBuilder: PostingBodyBuilder,
    private sectorService: SectorService
  ) {
    sectorService.sectorDeclared$.subscribe(name => {
      this.sectorNames.push(name);
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let dir = params['dir'];
      this.blogService.fetchPosting(dir).subscribe(tmpl => {
        const postingBody = this.postingBodyBuilder
          .CreateComponent(tmpl, [XLarge, Sector]);
        this.componentResolver
          .resolveComponent(postingBody)
          .then((factory: ComponentFactory<any>) => {
            const body = this.dynamicPostingBodyTarget
              .createComponent(factory, 0);
          });
      });
    });
  }

  selectSector(tocEntry: string) {
    this.sectorService.selectSector(tocEntry);
  }
}
