import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginSignInComponent } from './pages/login-sign-in/login-sign-in.component';

@NgModule({
  declarations: [
    LoginSignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,
  ]
})
export class AuthModule { }

