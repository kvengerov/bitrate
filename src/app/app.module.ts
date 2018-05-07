import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/app.routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CollectionComponent } from './component/collection/collection.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UploadComponent } from './component/upload/upload.component';
import { PopularItemComponent } from './component/popular/popular-list/popular-item/popular-item.component';
import { LastfmService } from './service/lastfm.service';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { TokenService } from './service/token.service';
import { PopularListComponent } from './component/popular/popular-list/popular-list.component';
import { LoginComponent } from './component/login/login.component';
import { AuthComponent } from './component/auth/auth.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionComponent,
    ProfileComponent,
    UploadComponent,
    PopularItemComponent,
    PopularListComponent,
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
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
