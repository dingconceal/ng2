
import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { LoginComponent } from './login/login.component';
import { MyClassComponent } from './my-class/my-class.component';
import { TestComponent } from './test/test.component';
import { AttentionComponent } from './attention/attention.component';
import { EditTestComponent } from './edit-test/edit-test.component';

const fallbackRoute: Route = {path: '**',component:NotFoundComponent};

const routes: Routes = [
    {path: '',redirectTo: '',pathMatch: 'full'}, 
    {path: 'signup',component: SignupFormComponent},
    {path: 'login',component: LoginComponent},
    {path: 'myclass',component: MyClassComponent},
    {path: 'test',component: TestComponent},
    {path: 'attention',component:AttentionComponent},
    {path: 'edit',component:EditTestComponent},
    
    fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }