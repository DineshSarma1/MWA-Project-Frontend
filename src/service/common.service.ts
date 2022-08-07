import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseData } from '../__models/ResponseData';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private httpclient: HttpClient,
    private authServe: AuthService
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.authServe.getToken()
    })
  };

  httpOptionsImage = {
    headers: new HttpHeaders({
      'Content-Type': {} as any,
      Authorization: 'Bearer ' + this.authServe.getToken()
    })
  };

  getData(url: string): Observable<ResponseData> {
    return this.httpclient.get<ResponseData>(url, this.httpOptions);
  }

  getDataPara(url : string, data: any): Observable<ResponseData> {
    return this.httpclient.get<ResponseData>(url + data, this.httpOptions);
  }

  postData(url: string, data: any): Observable<ResponseData> {
    return this.httpclient.post<ResponseData>(url, data, this.httpOptions);
  }

  postDataImage(url: string, data: any): Observable<ResponseData> {
    return this.httpclient.post<ResponseData>(url, data, this.httpOptionsImage);
  }
}
