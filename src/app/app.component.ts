import { Component,EventEmitter,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { authentication } from './services/authentication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  isLogin = false ;
  isTeacher = false ;
  a1;
  a2;
  name;
  
  status = {isopen: false};
  toggled(open:any) {
    console.log('Dropdown is now: ', open);
  }
  toggleDropdown ($event: MouseEvent) {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  constructor(private router:Router,private auth:authentication) {
      
     
      //console.log("islogin = "+this.isLogin);
  }


  logout(){
      this.isLogin = false;
      this.isTeacher = false;
      //this.a1.unsubscribe();
      //this.a2.unsubscribe();
      this.auth.dologout();
  }
  ngOnInit(){
      this.a1=this.auth.isLogin.subscribe((value:boolean)=>{
          this.isLogin = value;
          if(this.isLogin == true)
              this.name = JSON.parse(localStorage.getItem('currentUser')).json.Name;
          //console.log("this.isLogin = "+this.isLogin);
      });
      this.a2=this.auth.isTeacher.subscribe((value:boolean)=>{
          this.isTeacher = value;
      });
      this.auth.checkstates();
  }

}


