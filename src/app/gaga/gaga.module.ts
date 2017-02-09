import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GagaRoutingModule } from './gaga-routing.module';
import { GagaComponent } from './gaga.component';

@NgModule({
  imports: [
    CommonModule,
    GagaRoutingModule
  ],
  declarations: [GagaComponent]
})
export class GagaModule { }
