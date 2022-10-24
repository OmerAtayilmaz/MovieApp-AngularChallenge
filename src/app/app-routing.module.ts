import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  {
    path:"",
    component:AppComponent
  },
  {
    path:"movies",
    component:MovieListComponent
  }
  ,
  {
    path:"movie/detail/:id",
    component:MovieComponent  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
