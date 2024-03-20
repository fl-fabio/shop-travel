import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Auth } from "src/app/models/auth";

@Injectable({
    providedIn: 'root'
})
export class Authservice {
    data: Auth | undefined;
    error: any;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {}

    login({user, pass}: any) {
        this.error = null;

        const params = new HttpParams()
            .set('user', user)
            .set('pass', pass);
        this.http.get<Auth>(`http://localhost:3000/login`, { params })
            .subscribe({
                next: (res)=> {
                    this.data = res;
                    this.router.navigateByUrl('search');
                },
                error: err => this.error = err
            }
            );
    }

    logout() {
        this.data = undefined;
        this.router.navigateByUrl('login');
    }

    isLogged() {
        return !!this.data?.token;
    }
}

