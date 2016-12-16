
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authentication } from './../services/authentication.service';
@Component({
  selector: 'navabar',
  templateUrl: './navabar.component.html',
  styleUrls: ['./navabar.component.css']
})
export class NavabarComponent implements OnInit {

  isLogin = false ;
  isTeacher = false ;
  constructor(auth:authentication) {
      if(localStorage.getItem('currentUser')!=null){
        //this.isLogin = auth.getlogin();
        //this.isTeacher = auth.getteacher();
      }
      //console.log("islogin = "+this.isLogin);
  }
  test(){
    localStorage.removeItem('currentUser');
    this.isLogin = false;
    //console.log("isLogin = "+this.isLogin);
    this.isTeacher = false;
    //console.log("isTeacher = "+ this.isTeacher);
  }
  ngOnInit() {
  }

}
