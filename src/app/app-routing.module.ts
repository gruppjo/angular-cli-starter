import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent }
];

export const AppRoutingModule: ModuleWithProviders =
  RouterModule.forRoot(routes, {useHash: true});
