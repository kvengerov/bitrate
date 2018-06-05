import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'Log In' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'reset-password', component: ResetPasswordComponent, data: { title: 'Reset password' } }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent]
})
export class AuthModule { }
