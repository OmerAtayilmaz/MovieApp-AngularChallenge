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
import { FirstmenuComponent } from './components/routes/firstmenu/firstmenu.component';
import { SecondmenuComponent } from './components/routes/secondmenu/secondmenu.component';
import { ProductComponent } from './components/routes/product/product.component';
import { NotFoundComponent } from './components/routes/not-found/not-found.component';
import { TyperComponent } from './components/typer/typer.component';
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
    FirstmenuComponent,
    SecondmenuComponent,
    ProductComponent,
    NotFoundComponent,
    TyperComponent
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
