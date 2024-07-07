import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginSignInComponent } from './pages/login-sign-in/login-sign-in.component';

const routes: Routes = [
  {
    path: 'login-sign-in', //TODO http://localhost:4200/auth/login-sign-in
    component: LoginSignInComponent,
  },

  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
