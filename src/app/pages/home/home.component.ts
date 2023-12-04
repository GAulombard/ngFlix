import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { TvshowsService } from '../../services/tvshows.service';
import { map } from 'rxjs';
import { mapToMovies } from '../../shared/component/types/tvshow';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(
    private movieService: MoviesService,
    private tvShowsService: TvshowsService
  ) {}

  //movies
  popularMovies$ = this.movieService.getMoviesByType('popular');
  upcomingMovies$ = this.movieService.getMoviesByType('upcoming', 12);
  topRatedMovies$ = this.movieService.getMoviesByType('top_rated', 12);

  //tv shows
  popularTvShows$ = this.tvShowsService
    .getTvShowsByType('popular', 12)
    .pipe(map(mapToMovies));
  topRatedTvShows$ = this.tvShowsService
    .getTvShowsByType('top_rated', 12)
    .pipe(map(mapToMovies));
}
