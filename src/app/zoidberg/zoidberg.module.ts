import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoidbergRoutingModule } from './zoidberg-routing.module';
import { ZoidbergComponent } from './zoidberg.component';

@NgModule({
  imports: [
    CommonModule,
    ZoidbergRoutingModule
  ],
  declarations: [ZoidbergComponent]
})
export class ZoidbergModule { }
