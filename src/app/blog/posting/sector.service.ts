import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SectorService {
  private sectorDeclaredSource = new Subject<string>();
  private sectorSelectedSource = new Subject<string>();

  sectorDeclared$ = this.sectorDeclaredSource.asObservable();
  sectorSelected$ = this.sectorSelectedSource.asObservable();

  declareSector(name: string) {
    this.sectorDeclaredSource.next(name);
  }

  selectSector(tocEntry: string) {
    this.sectorSelectedSource.next(tocEntry);
  }
}
