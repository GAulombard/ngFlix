import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Observable, map } from 'rxjs';
import { MoviesDto } from '../../shared/component/types/movie';
import { PaginatorState } from 'primeng/paginator';
import { ActivatedRoute } from '@angular/router';
import { TvshowsService } from '../../services/tvshows.service';
import {
  mapToMoviesDto,
} from '../../shared/component/types/tvshow';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrl: './show-list.component.scss',
})
export class ShowListComponent implements OnInit {
  type!: string;
  showList$!: Observable<MoviesDto>;
  searchValue = '';
  total_records!: number;

  constructor(
    private moviesService: MoviesService,
    private router: ActivatedRoute,
    private tvShowService: TvshowsService
  ) {}

  ngOnInit(): void {
    //this.type = this.router.snapshot.params['type'];
    this.router.params.subscribe((params) => {
      this.type = params['type'];
      this.getPagedShows(this.type, 1);
    });
  }

  getPagedShows(type: string, page: number, searchDefault?: string): void {
    if (type === 'movie') {
      this.showList$ = this.moviesService.searchMovies(page, searchDefault);
    } else {
      this.showList$ = this.tvShowService
        .searchTvShows(page, searchDefault)
        .pipe(map(mapToMoviesDto));
    }

    this.total_records = 120;
  }

  searchChange(): void {
    this.getPagedShows(this.type, 1, this.searchValue);
  }

  onPageChange(event: PaginatorState) {
    const page = event.page ? event.page + 1 : 1;
    this.getPagedShows(this.type, page, this.searchValue);
  }
}
