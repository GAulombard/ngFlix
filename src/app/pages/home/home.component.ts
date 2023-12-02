import { Component } from '@angular/core'
import { MoviesService } from '../../services/movies.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private movieService: MoviesService) {}

  upcomingMovies$ = this.movieService.getMoviesByType('upcoming')
  topRatedMovies$ = this.movieService.getMoviesByType('top_rated')
}
