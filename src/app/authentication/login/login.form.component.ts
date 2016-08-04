import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

type LoginFormModel = {
    email: string,
    password: string
}
@Component({
    selector: 'login-form',
    templateUrl: 'login.form.template.html'
})
export class LoginForm {
    model: LoginFormModel;
};
