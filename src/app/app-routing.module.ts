import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleComponentComponent } from './title-component/title-component.component';

const routes: Routes = [
  { path: '', component: TitleComponentComponent }
];

export const AppRoutingModule: ModuleWithProviders =
  RouterModule.forRoot(routes, {useHash: true});
