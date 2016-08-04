import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    private loggedIn = false;
    private user: any = null;

    constructor(private http: Http) {
        this.loggedIn = !!localStorage.getItem('auth_token');
    }

    login(email: string, password: string) {
        return this.http
            .post(
                'http://127.0.0.1:3030/login',
                JSON.stringify({email, password})
            )
            .map(res => res.json())
            .map((res: any) => {
                console.log(res);
                if (res.success) {
                    localStorage.setItem('auth_token', res.auth_token);
                    this.loggedIn = true;
                }
                return res;
            });
    }

    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }

    isLoggedIn() {
        return this.loggedIn;
    }
}
