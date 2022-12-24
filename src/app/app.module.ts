import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { InicioComponent } from './filmboxd/inicio/inicio.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FilmboxdComponent } from './filmboxd/filmboxd.component';
import { TrendingComponent } from './filmboxd/inicio/trending/trending.component';
import { LatestMoviesComponent } from './filmboxd/inicio/latest-movies/latest-movies.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    FilmboxdComponent,
    TrendingComponent,
    LatestMoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
