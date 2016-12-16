
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AlertModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DropdownModule } from "ng2-dropdown";
import { AppRoutingModule } from './app.routing';



import { authentication } from './services/authentication.service';

import { AppComponent } from './app.component';
import { NavabarComponent } from './navabar/navabar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { MyClassComponent } from './my-class/my-class.component';
import { TestComponent } from './test/test.component';
import { AttentionComponent } from './attention/attention.component';
import { EditTestComponent } from './edit-test/edit-test.component';
import { MonacoEditorComponent } from 'ng2-monaco-editor';


@NgModule({
  declarations: [
    AppComponent,
    NavabarComponent,
    SignupFormComponent,
    LoginComponent,
    MyClassComponent,
    TestComponent,    
    AttentionComponent,
    EditTestComponent,
    MonacoEditorComponent,  



    NotFoundComponent

      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    
    
    DropdownModule,
    AlertModule,
    AppRoutingModule
  ],
  providers: [authentication],
  bootstrap: [AppComponent]
})
export class AppModule { }
