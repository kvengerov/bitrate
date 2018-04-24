import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionComponent } from '../component/collection/collection.component';
import { ProfileComponent } from '../component/profile/profile.component';
import { UploadComponent } from '../component/upload/upload.component';

const routes: Routes = [
  {
    path: 'collection',
    component: CollectionComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'upload',
    component: UploadComponent
  },

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
