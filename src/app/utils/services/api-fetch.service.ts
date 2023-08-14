import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AlertifyService } from './alertify.service';

@Injectable({
  providedIn: 'root',
})
export class ApiFetchService {
  constructor(private _http: HttpClient,
    private alertService: AlertifyService
  ) { }

  requestAsync(
    method: string,
    path: string,
    data: object,
    getToken: boolean = false
  ) {
    return new Promise((resolve, reject) => {
      let config: object = {};
      if (data != null) Object.assign(config, { body: data });
      if (method == 'GET' && data != null) Object.assign(config, { params: data })
      if (localStorage.getItem('accessToken'))
        Object.assign(config, {
          headers: { Authorization: "beear " + localStorage.getItem('accessToken') },
        });
      this._http
        .request<any>(method, `${environment.apiUrl}${path}`, config)
        .subscribe(
          (res) => resolve(res),
          (error) => {
            this.alertService.error("Hata", error.error.message)
            reject({
              status: error.status,
              message:
                error.error != undefined
                  ? error.error.message
                  : error.message,
            })
          }

        );
    });
  }
}