import { Injectable,EventEmitter } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class authentication{
    isLogin: EventEmitter<boolean>;
    isTeacher: EventEmitter<boolean>;
    states = null;
    constructor(private http:Http){
        this.isLogin = new EventEmitter(false);
        this.isTeacher = new EventEmitter(false);
        if(localStorage.getItem('currentUser') != null){
            this.states = JSON.parse(localStorage.getItem('currentUser'));
            this.isLogin.emit(this.states.isLogin);
            this.isTeacher.emit(this.states.isTeacher);
        }
        //console.log('Login Service Initialized...');
    }
    dologin(obj){
        
       return this.http.post('http://140.125.90.230:3000/api/login',obj)
                .map(res => {
                    var user = res.json();
                    //console.log(user);
                    if(user.result == 'ok'){
                        localStorage.setItem('currentUser',JSON.stringify(user));
                        //console.log("user json = " + user.json);
                        this.states = JSON.parse(localStorage.getItem('currentUser'));
                        this.isLogin.emit(this.states.isLogin);
                        this.isTeacher.emit(this.states.isTeacher);
                        //res.json();
                    }else{
                        //alert(user.result);
                    }
                    return JSON.stringify(user);
                }
                );
    }
    dologout(){
        
        localStorage.clear();
        this.checkstates();
        //console.log("locasStorage = " + localStorage.getItem('currentUser'));
    }
    getlogin(){
        return this.isLogin;
    }
    getteacher(){
        return this.isTeacher;
    }
    checkstates(){
        //console.log("locasStorage = " + localStorage.getItem('currentUser'));
        if(localStorage.getItem('currentUser') != null){
            //console.log("in check");
            this.states = JSON.parse(localStorage.getItem('currentUser'));
            this.isLogin.emit(this.states.isLogin);
            this.isTeacher.emit(this.states.isTeacher);
        }else{
            this.isLogin.emit(false);
            this.isTeacher.emit(false);
        }
    }
}