import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../shared/component/types/movie';
import { Observable } from 'rxjs';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Video } from '../../shared/component/types/video';
import { Image } from '../../shared/component/types/image';
import { Actor } from '../../shared/component/types/credit';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  show$!: Observable<Movie>;
  showSimilars$!: Observable<Movie[]>;
  showVideos$!: Observable<Video[]>;
  showImages$!: Observable<Image[]>;
  showCasts$!: Observable<Actor[]>;
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
    this.showVideos$ = this.moviesService.getMovieVideos(this.showId);
    this.showImages$ = this.moviesService.getImageVideos(this.showId);
    this.showCasts$ = this.moviesService.getMovieCasts(this.showId);
    this.showSimilars$ = this.moviesService.getSimilarMovies(this.showId);
  }
}
