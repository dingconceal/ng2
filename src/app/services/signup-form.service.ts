import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class signupService{
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }

    signup(obj){
        return this.http.get('http://140.125.90.230:3000/api/login?email=')
                .map(res => res.json());
    }
}