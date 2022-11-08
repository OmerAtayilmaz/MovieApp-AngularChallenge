import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
// search module
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MovieGenreComponent } from './components/movie-genre/movie-genre.component';
import { FullDetailComponent } from './components/full-detail/full-detail.component';
import { TitlePipe } from './pipes/title.pipe';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ReactiveCvComponent } from './components/reactive-cv/reactive-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MovieListComponent,
    MovieGenreComponent,
    FullDetailComponent,
    TitlePipe,
    ContactusComponent,
    ReactiveCvComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxSkeletonLoaderModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
