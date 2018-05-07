import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from '../component/collection/collection.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { UploadComponent } from '../component/upload/upload.component';
import {PopularListComponent} from '../component/popular/popular-list/popular-list.component';
import {AuthComponent} from '../component/auth/auth.component';
import {LoginComponent} from '../component/login/login.component';

const routes: Routes = [
  { path: '', component: PopularListComponent },
  { path: 'collection', component: CollectionComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'login', component: LoginComponent },
  { path: ':provider/auth', component: AuthComponent },

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
