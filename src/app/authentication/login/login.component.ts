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
    submitLogin(msg) {
        console.log(msg);
        this.authService.login(msg.email, msg.password).subscribe(res => console.log(res));
    }
};
