import {NgModule} from '@angular/core';
import { CollectionWindowComponent } from './collection-window/collection-window.component';
import {CommonModule} from '@angular/common';
import {CollectionRoutingModule} from './collection-routing.module';
import { CollectionListComponent } from './collection-list/collection-list.component';

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule,
  ],
  declarations: [ CollectionWindowComponent, CollectionListComponent ],
})

export class CollectionModule {}
