import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { CoreModule} from './core/core.module';
import { AppRoutingModule } from './app.routing.module';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './interceptor/auth.interceptor';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UploadComponent } from './component/upload/upload.component';
import { PopularItemComponent } from './component/popular/popular-list/popular-item/popular-item.component';
import { PopularListComponent } from './component/popular/popular-list/popular-list.component';
import { ChatComponent } from './component/chat/chat.component';
import { HomeComponent } from './component/home/home.component';

import { LastfmService } from './service/lastfm.service';
import { TokenService } from './service/token.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './service/auth.guard';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UploadComponent,
    PopularItemComponent,
    PopularListComponent,
    HomeComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularFireDatabaseModule,
    NgbModule.forRoot()
  ],
  providers: [
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
