import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './routing/app.routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CollectionComponent } from './component/collection/collection.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UploadComponent } from './component/upload/upload.component';
import { PopularComponent } from './component/popular/popular.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionComponent,
    ProfileComponent,
    UploadComponent,
    PopularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
