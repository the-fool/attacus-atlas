import { Component, Injectable, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ComponentResolver, ComponentFactory, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      changeDetection: ChangeDetectionStrategy.OnPush
    })
    class PostingBody { };
    return PostingBody;
  }
}

@Component({
  selector: 'posting',
  templateUrl: 'posting.template.html',
  providers: [
    BlogService,
    PostingBodyBuilder,
    SectorService
  ],
  directives: [
    XLarge,
    Sector
  ]
})
export class Posting implements OnInit {
  private sectorNames: string[] = [];

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
      console.log(`Got ${name}`);
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
