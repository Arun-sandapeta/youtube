import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { MusicComponent } from './music/music.component';
import { MoviesComponent } from './movies/movies.component';
import { NewsNavbarComponent } from './news-navbar/news-navbar.component';
import { LocalNewsComponent } from './local-news/local-news.component';
import { NationalNewsComponent } from './national-news/national-news.component';
import { InternationalNewsComponent } from './international-news/international-news.component';

const routes: Routes = [
  {path :'Home' , component: HomeComponent},
  {path: 'news' ,
     component: NewsNavbarComponent,
     children:[{
      path: 'loaclnews', component:LocalNewsComponent
     },
    {
      path:'nationalnews' , component: NationalNewsComponent
    },
  {
    path:'internationalnews' , component: InternationalNewsComponent
  }]

  },
  
  {path: 'music', component: MusicComponent},
  {path: 'movies', component: MoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
