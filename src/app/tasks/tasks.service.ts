import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class TaskService{
    constructor(private http:Http){
        console.log('Task Service Initialized...');
    }

    getTasks(){
        return this.http.get('http://140.125.90.230:3000/api/tasks')
                .map(res => res.json());
    }
    getTest(){
        return 'abc';
    }
}