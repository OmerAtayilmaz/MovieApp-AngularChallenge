import { Injectable } from '@angular/core';
import { API_MOVIE_LIST_URI, API_TOKEN, API_URI } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private link:string=`${API_URI}${API_TOKEN}`;
  private listLink:string=`${API_MOVIE_LIST_URI}${API_TOKEN}`;
  constructor(private httpClient:HttpClient) {
    console.log(this.link);
   }

  getMovie(movie_id:string){
    return this.httpClient.get(this.link.replace("MOVIE_ID",movie_id));
  }  

  getMovieList(){
    return this.httpClient.get(this.listLink);
  }

  getQueryResult(q:string){
    let queryResultList=`https://api.themoviedb.org/3/search/movie?page=1&api_key=${API_TOKEN}&query=${q}`;
    return this.httpClient.get(queryResultList);
  }
}
