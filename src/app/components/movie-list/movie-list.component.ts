import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movieList:any;
  searchText:any;
  loader:boolean=true;
  totalCount:number=10;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(res=>{
      setTimeout(()=>{
        this.movieList=res
        this.loader=false;
      },3000);
  });
  }


}
