import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZoidbergComponent } from './zoidberg.component';

const routes: Routes = [
  { path: 'zoidberg', component: ZoidbergComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ZoidbergRoutingModule { }
