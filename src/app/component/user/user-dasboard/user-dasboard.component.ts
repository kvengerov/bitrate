import { Component, OnInit } from '@angular/core';

import {AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage';

import { AuthService } from '../../../service/auth.service';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-dasboard',
  templateUrl: './user-dasboard.component.html',
  styleUrls: ['./user-dasboard.component.scss']
})
export class UserDasboardComponent implements OnInit {
  edition = false;
  user: User;
  task: AngularFireUploadTask;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private storage: AngularFireStorage
  ) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    return this.authService.user.subscribe(user => (this.user = user));
  }
  updateProfile() {
    return this.userService.updateProfileData(
      this.user.displayName,
      this.user.photoURL
    );
  }
  updateEmail() {
    return this.userService.updateEmailData(
      this.user.email
    );
  }
  uploadPhotoURL(event): void {
    const file = event.target.files[0]
    const path = `users/${this.user.uid}/photos/${file.name}`
    if (file.type.split(`/`)[0] !== `image`) {
      return alert(`only images`)
    } else {
      this.task = this.storage.upload(path, file)
      this.task.downloadURL().subscribe(url => {
        this.userService.updateProfileData(this.user.displayName, url);
      });
    }
  }
  updateUser() {
    const data = {
      name: this.user.name || null,
      lastName: this.user.lastName || null,
      location: this.user.location || null,
      website: this.user.website || null
    };
    return this.userService.updateUserData(data);
  }

}
