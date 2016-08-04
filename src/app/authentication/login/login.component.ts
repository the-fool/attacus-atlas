import { Component } from '@angular/core';
import { LoginForm } from './login.form.component';

@Component({
    selector: 'login',
    directives: [LoginForm],
    templateUrl: 'login.template.html'
})
export class Login{};