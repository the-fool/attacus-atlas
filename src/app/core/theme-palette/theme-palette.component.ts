import { Component } from '@angular/core';

@Component({
  selector: 'theme-palette',
  template: `
    <div class="wrapper">
      <a *ngFor="let theme of themes" (click)="setTheme(theme)">{{theme.name}}</a>
    </div>
  `
})
export class ThemePalette {
  private themes = [
    {
      name: 'horizontal'
    },
    {
      name: 'vertical'
    }
  ];

  setTheme(theme) {
    document.cookie = `layout=${theme.name}`;
    location.reload();
  }
}
