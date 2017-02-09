import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GagaComponent } from './gaga.component';

const routes: Routes = [
  { path: 'gaga', component: GagaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class GagaRoutingModule { }
