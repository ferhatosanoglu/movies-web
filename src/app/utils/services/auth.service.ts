import { Injectable } from '@angular/core';
import { ApiFetchService } from './api-fetch.service';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;

    constructor(
        private _apiFetchService: ApiFetchService,
        private _router: Router,
    ) {
        this.currentUserSubject = new BehaviorSubject<any>(
            JSON.parse(localStorage.getItem('currentUser')!)
        );
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentUserSubject.value;
    }
    async login(user: any) {
        try {
            const respone: any = await this._apiFetchService.requestAsync(
                'POST',
                'auth/login',
                user
            );
            localStorage.setItem("currentUser", JSON.stringify(respone.existUser));
            localStorage.setItem("accessToken", respone.accessToken);
            this._router.navigateByUrl("");
            return respone;
        } catch (error: any) {
            console.error(error);
        }
    }
    async register(user: any) {
        try {
            const respone: any = await this._apiFetchService.requestAsync(
                'POST',
                'auth/register',
                user
            );
            localStorage.setItem("currentUser", JSON.stringify(respone.newUser));
            localStorage.setItem("accessToken", respone.accessToken);
            this._router.navigateByUrl("");
            return respone;
        } catch (error: any) {
            console.error(error);
        }
    }

    async logout() {
        localStorage.removeItem('currentUser');
        window.location.href = 'auth';
    }
}