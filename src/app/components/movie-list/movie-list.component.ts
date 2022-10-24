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
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getMovieList().subscribe(res=>{
      this.movieList=res
  });
  }


}
