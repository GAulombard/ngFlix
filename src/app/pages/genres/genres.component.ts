import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Genres, Movie } from '../../shared/component/types/movie';
import { ActivatedRoute } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genres$!: Observable<Genres[]>;
  shows$!: Observable<Movie[]>;
  genreId = '';
  total_records!: number;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.genreId = params['genreId'];
      this.getPagedShows(1);
    });

    this.genres$ = this.moviesService.getMoviesGenres();
  }

  getPagedShows(page: number) {
    this.shows$ = this.moviesService.getMoviesByGenre(this.genreId, page);
    this.total_records = 120;
  }

  onPageChange(event: PaginatorState) {
    console.log(event);
    const page = event.page ? event.page + 1 : 1;
    this.getPagedShows(page);
  }
}
