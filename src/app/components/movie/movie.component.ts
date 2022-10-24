import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  dataList:any;
  constructor(private movieService:MovieService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>this.movieService.getMovie(param["id"]).subscribe(res=>this.dataList=res));
  }
}
