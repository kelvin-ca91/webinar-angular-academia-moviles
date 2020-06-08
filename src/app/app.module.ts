import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoMasPopularComponent } from './movies/lo-mas-popular/lo-mas-popular.component';
import { LoMasTopComponent } from './movies/lo-mas-top/lo-mas-top.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieCardComponent } from './movies/movie-card/movie-card.component';

@NgModule({
  declarations: [AppComponent, LoMasPopularComponent, LoMasTopComponent, MovieCardComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
