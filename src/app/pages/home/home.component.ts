import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movies';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];

  constructor(private serviceMovies: MoviesService) {}

  ngOnInit(): void {
    this.serviceMovies.getMovies('popular').subscribe((movies) => {
      this.popularMovies = movies;
    });
    this.serviceMovies.getMovies('top_rated').subscribe((movies) => {
      this.topRatedMovies = movies;
    });
    this.serviceMovies.getMovies('upcoming').subscribe((movies) => {
      this.upcomingMovies = movies;
    });
  }
}
