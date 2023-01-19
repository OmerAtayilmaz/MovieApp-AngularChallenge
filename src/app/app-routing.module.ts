import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FullDetailComponent } from './components/full-detail/full-detail.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieComponent } from './components/movie/movie.component';
import { ReactiveCvComponent } from './components/reactive-cv/reactive-cv.component';
import { FirstmenuComponent } from './components/routes/firstmenu/firstmenu.component';
import { NotFoundComponent } from './components/routes/not-found/not-found.component';
import { ProductComponent } from './components/routes/product/product.component';
import { SecondmenuComponent } from './components/routes/secondmenu/secondmenu.component';
import { TyperComponent } from './components/typer/typer.component';
const routes: Routes = [
  {
    path:"",
    component:MovieListComponent
  },
  {
    path:"movies",
    component:MovieListComponent
  }
  ,
  {
    path:"movie/detail/:id",
    component:MovieComponent
  },
  {
    path:"movie/full-detail/:id",
    component:FullDetailComponent
  },
  {
    path:"contact-us",
    component:ContactusComponent
  },
  {
    path:"reactive-cv",
    component:ReactiveCvComponent
  },
  {
    path:"routes",
    component:FirstmenuComponent
  },
  {
    path:"sub-menu/here",
    component:SecondmenuComponent
  },{
    path:"product/:id/:name",
    component:ProductComponent
  },
  {
    path:"typer",
    component:TyperComponent
  }
  ,{
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
