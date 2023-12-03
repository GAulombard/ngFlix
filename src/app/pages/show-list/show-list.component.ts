import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable } from 'rxjs';
import { MoviesDto } from '../../shared/component/types/movie';
import { PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss',
})
export class ShowListComponent implements OnInit {
  showList$!: Observable<MoviesDto>;
  searchValue = '';

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getPagedShows(1);
  }

  getPagedShows(page: number, searchDefault?: string): void {
    this.showList$ = this.moviesService.searchMovies(page, searchDefault);
  }

  searchChange(): void {
    this.getPagedShows(1, this.searchValue);
  }

  onPageChange(event: PaginatorState) {
    const page = event.page ? event.page + 1 : 1;
    this.getPagedShows(page, this.searchValue);
  }
}
