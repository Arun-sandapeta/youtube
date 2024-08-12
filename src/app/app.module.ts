import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { LocalNewsComponent } from './local-news/local-news.component';
import { NationalNewsComponent } from './national-news/national-news.component';
import { InternationalNewsComponent } from './international-news/international-news.component';
import { NewsNavbarComponent } from './news-navbar/news-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    HomeComponent,
    NewsComponent,
    MusicComponent,
    MoviesComponent,
    LocalNewsComponent,
    
    NationalNewsComponent,
    InternationalNewsComponent,
    NewsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
