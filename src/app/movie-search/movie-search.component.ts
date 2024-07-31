import { Component } from '@angular/core';
import { OmdbService } from '../omdb.service';
@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent 
{
  movieTitle: string = '';
  movie: any;
  constructor(private omdbService: OmdbService) { }
  searchMovie() 
  {
    this.omdbService.getMovie(this.movieTitle).subscribe(data => 
    {
      this.movie = data;
    });
  }
}