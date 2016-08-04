import { Component, Output, EventEmitter } from '@angular/core';
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
    model: LoginFormModel = {
        email: null,
        password: null
    };
    submitted = false;
    @Output('onSubmit') submission = new EventEmitter();
    onSubmit() {
        this.submitted = true;
        this.submission.emit(this.model);
    }
};
