import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../service/auth.service';
import {Router} from '@angular/router';
import {User} from '../user/user.model';
import {SearchComponent} from '../search/search.component';
import {SearchService} from '../search/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [SearchComponent]
})
export class NavbarComponent implements OnInit {
  user: User;

  public isLoggedIn;
  constructor(
    private authService: AuthService,
    private router: Router,
    public search: SearchComponent) {
    authService.isAuthentificates()
      .subscribe(
        success => this.isLoggedIn = success
      );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    return this.authService.user.subscribe(user => (this.user = user));
  }

}
