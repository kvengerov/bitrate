import { ChatComponent } from './component/chat/chat.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';

import { ProfileComponent } from './component/profile/profile.component';
import { UploadComponent } from './component/upload/upload.component';
import { PopularItemComponent } from './component/popular/popular-list/popular-item/popular-item.component';
import { PopularListComponent } from './component/popular/popular-list/popular-list.component';
import { LoginComponent } from './component/auth/login/login.component';

import { AuthInterceptor } from './interceptor/auth.interceptor';

import { LastfmService } from './service/lastfm.service';
import { TokenService } from './service/token.service';
import { AuthService } from './service/auth.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule} from 'angularfire2/firestore';
import { AngularFireStorageModule} from 'angularfire2/storage';
import { environment } from '../environments/environment';
import { HomeComponent } from './component/home/home.component';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthGuard} from './component/auth/auth.guard';
import {RegisterComponent} from './component/auth/register/register.component';
import {ResetPasswordComponent} from './component/auth/reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    UploadComponent,
    PopularItemComponent,
    PopularListComponent,
    LoginComponent,
    HomeComponent,
    ChatComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment .firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    LastfmService,
    TokenService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
