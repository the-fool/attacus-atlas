import { Directive, Input, OnInit } from '@angular/core';
import { SectorService } from '../sector.service';

@Directive({
  selector: '[aaSector]'
})
export class Sector implements OnInit {
  @Input('aaSector') private sectorName: string;

  constructor(private sectorService: SectorService) {
    sectorService.sectorSelected$.subscribe(tocEntry => {
      if (tocEntry === this.sectorName) {
        console.log('selected: ', tocEntry)
      }
    })
  }
  ngOnInit() {
    console.log(this.sectorName);
    this.sectorService.declareSector(this.sectorName);
  }
}
