
import { NgModule } from '@angular/core';
import { Routes, Route, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const fallbackRoute: Route = {path: '**',component:NotFoundComponent};

const routes: Routes = [
    {path: '',redirectTo: '',pathMatch: 'full'}, 
    {path: 'signup',component: SignupFormComponent},
    fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }