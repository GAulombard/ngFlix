import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Genres } from '../../shared/component/types/movie';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrl: './genres.component.scss',
})
export class GenresComponent implements OnInit {
  genres$!: Observable<Genres[]>;

  constructor(private moviesService: MoviesService) {}
  ngOnInit(): void {
    this.genres$ = this.moviesService.getMoviesGenres();
  }
}
