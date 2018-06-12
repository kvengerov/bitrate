import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './component/chat/chat.component';
import { UploadComponent } from './component/upload/upload.component';
import { HomeComponent } from './component/home/home.component';
import { SearchComponent } from './component/search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'collection', loadChildren: './component/collection/collection.module#CollectionModule' },
  { path: '', loadChildren: './component/auth/auth.module#AuthModule' },
  { path: '', loadChildren: './component/user/user.module#UserModule' },
  { path: 'upload', component: UploadComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'search', component: SearchComponent }
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
