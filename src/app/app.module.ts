import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PapaObsWrapModule } from 'papa-obs-wrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PapaObsWrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
