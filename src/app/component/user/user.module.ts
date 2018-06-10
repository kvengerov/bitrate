import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

import { UserService } from './user.service';
import { UserDasboardComponent } from './user-dasboard/user-dasboard.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';

const routes: Routes = [
  { path: `me`, component: UserDasboardComponent },
  { path: `users`, component: UserListComponent },
  { path: `profile`, component: UserDetailComponent }
]


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)

  ],
  declarations: [UserDasboardComponent, UserDetailComponent, UserListComponent, UserListItemComponent],
  providers: [UserService]
})
export class UserModule { }
