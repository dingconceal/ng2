
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsernameValidators } from '../services/usernameValidators';
import { authentication } from '../services/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  postData;
  form: FormGroup;
  constructor(fb: FormBuilder, private authentication: authentication,private router:Router) { 
      this.form = fb.group({
        email: ['', Validators.compose([
            Validators.required, 
            UsernameValidators.cannotContainSpace
            ])],
        password: ['', Validators.required]
       })  
       
  }
  
  login(event){
      event.preventDefault();
      
      var data = this.authentication.dologin(this.form.value)
            .subscribe(
              //data => this.postData = JSON.stringify(data),
              //error => alert(error),
              (value) => {
                  this.postData = JSON.parse(value);
                  if(this.postData.result=="ok"){
                    this.authentication.checkstates();
                    this.router.navigate(['/']);
                  }else{
                      alert(this.postData.result);
                  }

              }
              
            );
      //data.unsubscribe();
      //console.log(this.authentication.dologin(this.form.value));
  }

  ngOnInit() {
  }

}
