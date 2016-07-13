import { Component, Injectable, Input, OnInit } from '@angular/core';
import { ChangeDetectionStrategy, ComponentResolver, ComponentFactory, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
const style = require('./posting.style');
import { BlogService } from '../blog.service';
import { XLarge } from './x-large';
import { Sector } from './sector';
import { SectorService } from './sector.service';
console.log(style);
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
      <li *ngFor="let i of index"><button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">{{i}}</button></li>
    </ul>
    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
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
