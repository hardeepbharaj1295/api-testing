import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { User } from './user';
import { Observable } from 'rxjs/Observable';

export class UserService{
    baseUrl:string="http://localhost:49621/api/values";
    constructor(public http:Http) {}   
    
    register(user: User) {
        return this.http.post(this.baseUrl + user, this.requestOptions());
      }

      private requestOptions() {
        const headers = new Headers({'Content-type': 'application/json'});
        return new RequestOptions({headers: headers});
      }
}