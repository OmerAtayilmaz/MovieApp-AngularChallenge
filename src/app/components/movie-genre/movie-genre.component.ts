import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss']
})
export class MovieGenreComponent implements OnInit {
 
  @Input() genreList:any[]=[];
  @Output() emitter=new EventEmitter<any>();
  @Input() modelStatus:boolean=false;
  constructor() {
  
   }
  ngOnInit(): void {
    
  }
  isActive(){
    this.emitter.emit(this.modelStatus);
  }
}
