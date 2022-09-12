import { Component, OnInit } from '@angular/core';
import { Genre } from 'src/app/Models/genres';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres: Genre[] = [];

  constructor(private moviesServices: MoviesService) {}

  ngOnInit(): void {
    this.moviesServices.getMovieGenres().subscribe((genreData) => {
      this.genres = genreData;
    });
  }
}
