import {Component, OnInit} from '@angular/core';
import {LastfmService} from './service/lastfm.service';
import {AuthService} from './service/auth.service';
import {Router} from '@angular/router';
import {SearchComponent} from './component/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isLoggedIn;

  constructor(
    private authService: AuthService,
   ) {
    authService.isAuthentificates()
      .subscribe(
        success => this.isLoggedIn = success
      );
  }
  title = 'app';


}
