import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsernameValidators } from './usernameValidators'
@Component({
  selector: 'signup',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  // form = new FormGroup({
  //   username: new FormControl('',Validators.required),
  //   password: new FormControl('',Validators.required)
  // });

  form: FormGroup;
  signup(){
      //console.log(this.form.value);
  }
  constructor(fb: FormBuilder) { 
      this.form = fb.group({
        username: ['', Validators.compose([
            Validators.required, 
            UsernameValidators.cannotContainSpace
            ])],
        password: ['', Validators.required]
       })  
  }

  ngOnInit() {
  }

}
