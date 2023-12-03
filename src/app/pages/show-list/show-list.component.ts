import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { Movie } from '../../shared/component/types/movie';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss',
})
export class ShowListComponent implements OnInit {
  showList$!: Observable<Movie[]>;
  searchValue = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedShows(1);

  }

  getPagedShows(page: number, searchDefault?:string): void {
    this.showList$ = this.moviesService.searchMovies(1,searchDefault);
  }

  searchChange(): void {
    this.getPagedShows(1, this.searchValue);
  }
}
