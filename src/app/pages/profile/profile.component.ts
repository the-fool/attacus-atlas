import { Component } from '@angular/core';

@Component({
  selector: 'profile',
  template: `
    <h2>Profile</h2>
  `
})
export class Profile{};

export const navlink: Link = {
  path: '/profile',
  label: 'Profile'
};
