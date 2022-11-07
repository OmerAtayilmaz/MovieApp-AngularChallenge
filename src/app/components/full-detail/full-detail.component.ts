import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-full-detail',
  templateUrl: './full-detail.component.html',
  styleUrls: ['./full-detail.component.scss']
})
export class FullDetailComponent implements OnInit {

  movie:any;
  constructor(private movieService:MovieService,private activateRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param=>this.movieService.getMovie(param.id).subscribe(res=>this.movie=res));
  }

}
