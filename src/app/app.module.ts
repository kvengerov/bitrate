import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './routing/app.routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { CollectionComponent } from './component/collection/collection.component';
import { ProfileComponent } from './component/profile/profile.component';
import { UploadComponent } from './component/upload/upload.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CollectionComponent,
    ProfileComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
