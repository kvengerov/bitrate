import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionRoutingModule } from './collection-routing.module';
import { CollectionWindowComponent } from './collection-window/collection-window.component';

@NgModule({
  imports: [
    CommonModule,
    CollectionRoutingModule,
  ],
  declarations: [ CollectionWindowComponent ],
})

export class CollectionModule {}
