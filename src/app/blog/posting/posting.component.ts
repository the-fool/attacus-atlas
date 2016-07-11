import { Component, Injectable, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ChangeDetectorRef, ComponentResolver, ComponentFactory, ViewChild, ViewContainerRef } from '@angular/core';
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
  ],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class Posting implements OnInit {
  private sectorNames: string[] = [];
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
    private sectorService: SectorService,
    private cd: ChangeDetectorRef
  ) {
    sectorService.sectorDeclared$.subscribe(name => {
      this.sectorNames.push(name);
      if (name === 'END') {
        this.cd.markForCheck();;
      }
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
