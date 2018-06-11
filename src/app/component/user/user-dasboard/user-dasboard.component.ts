import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {User} from '../user.model';

@Component({
  selector: 'app-user-dasboard',
  templateUrl: './user-dasboard.component.html',
  styleUrls: ['./user-dasboard.component.scss']
})
export class UserDasboardComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    return this.authService.user.subscribe(user => (this.user = user));
  }

}
