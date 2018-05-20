import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollectionWindowComponent} from './collection-window/collection-window.component';

const routes: Routes = [
  {
    path: '',
    component: CollectionWindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CollectionRoutingModule { }
