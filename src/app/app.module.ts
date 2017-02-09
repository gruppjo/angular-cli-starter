import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { GagaModule } from './gaga/gaga.module';

import { AppComponent } from './app.component';
import { TitleComponentComponent } from './title-component/title-component.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponentComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AppRoutingModule,
    GagaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
