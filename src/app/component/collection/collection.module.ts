import {NgModule} from '@angular/core';
import {CollectionComponent} from './collection.component';

import { Routes, RouterModule} from '@angular/router';

const lazyRoutes: Routes = [
  {path: '', component: CollectionComponent }
]

@NgModule({
  imports: [
    RouterModule.forChild(lazyRoutes)
  ],
  declarations: [ CollectionComponent ],
})

export class CollectionModule {}
