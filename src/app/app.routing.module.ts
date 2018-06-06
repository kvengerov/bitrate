import { ChatComponent } from './component/chat/chat.component';
import {ModuleWithProviders, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './component/profile/profile.component';
import { UploadComponent } from './component/upload/upload.component';
import {LoginComponent} from './component/auth/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {AuthGuard} from './component/auth/auth.guard';
import {RegisterComponent} from './component/auth/register/register.component';
import {ResetPasswordComponent} from './component/auth/reset-password/reset-password.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  {
    path: 'collection',
    loadChildren: './component/collection/collection.module#CollectionModule',
    // canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent, data: { title: 'Log In' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'reset-password', component: ResetPasswordComponent, data: { title: 'Reset password' } },
  // { path: 'auth', loadChildren: './component/auth/auth.module#AuthModule' },

  // { path: '', component: PopularListComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'upload', component: UploadComponent },
  // { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
