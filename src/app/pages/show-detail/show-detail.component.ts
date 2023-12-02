import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../shared/component/types/movie';
import { Observable } from 'rxjs';
import { IMAGES_SIZES } from '../../constants/images-sizes';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  show$!: Observable<Movie>;
  imagesSizes = IMAGES_SIZES;

  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.showId = params['id'];
    });

    this.show$ = this.moviesService.getMovieById(this.showId);
  }
}
