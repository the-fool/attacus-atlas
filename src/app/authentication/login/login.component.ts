import { Component } from '@angular/core';
import { LoginForm } from './login.form.component';
import { AuthService } from '../../core/auth';
@Component({
    selector: 'login',
    directives: [LoginForm],
    templateUrl: 'login.template.html',
})
export class Login {
    constructor(
        private authService: AuthService
    ) {}
    submitLogin(event) {
        console.log(event);
    }
};
