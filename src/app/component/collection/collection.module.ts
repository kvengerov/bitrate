import {NgModule} from '@angular/core';
import { CollectionWindowComponent } from './collection-window/collection-window.component';
import {CommonModule} from '@angular/common';
import {CollectionRoutingModule} from './collection-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule,
  ],
  declarations: [ CollectionWindowComponent ],
})

export class CollectionModule {}
