import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MockService {
  header: Headers;
  mockUrl = './assets/mock/mock.json';
  constructor(private http: HttpClient) {}
  getMock() {
    return this.http.get(this.mockUrl);
  }
}
