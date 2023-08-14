import { Injectable } from '@angular/core';
import { ApiFetchService } from './api-fetch.service';

@Injectable({
    providedIn: 'root',
})
export class MoviesService {

    constructor(
        private _apiFetchService: ApiFetchService,

    ) {
    }

    async moviesList(params: any = {}) {
        return await this._apiFetchService.requestAsync(
            'GET',
            'movies',
            params
        );
    }

    async movieDetail(id: any) {
        return await this._apiFetchService.requestAsync(
            'GET',
            `movies/${id}`,
            {}
        );
    }

    async movieCreate(data: any) {
        return await this._apiFetchService.requestAsync(
            'POST',
            `movies`,
            data
        );
    }

    async movieUpdate(id: any, data: any) {
        return await this._apiFetchService.requestAsync(
            'PUT',
            `movies/${id}`,
            data
        );
    }

    async movieDelete(id: any) {
        return await this._apiFetchService.requestAsync(
            'DELETE',
            `movies/${id}`,
            {}
        );
    }
}