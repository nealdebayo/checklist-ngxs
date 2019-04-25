import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckListComponent } from './components/check-list/check-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: CheckListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
