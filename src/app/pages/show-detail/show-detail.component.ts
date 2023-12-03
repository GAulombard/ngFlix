import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../shared/component/types/movie';
import { Observable, map } from 'rxjs';
import { IMAGES_SIZES } from '../../constants/images-sizes';
import { Video } from '../../shared/component/types/video';
import { Image } from '../../shared/component/types/image';
import { Actor } from '../../shared/component/types/credit';
import { TvshowsService } from '../../services/tvshows.service';
import { mapToMovie, mapToMovies } from '../../shared/component/types/tvshow';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrl: './show-detail.component.scss',
})
export class ShowDetailComponent implements OnInit {
  showId = '';
  type = '';
  similarTitle = '';
  show$!: Observable<Movie>;
  showSimilars$!: Observable<Movie[]>;
  showVideos$!: Observable<Video[]>;
  showImages$!: Observable<Image[]>;
  showCasts$!: Observable<Actor[]>;
  imagesSizes = IMAGES_SIZES;

  constructor(
    private router: ActivatedRoute,
    private moviesService: MoviesService,
    private tvShowService: TvshowsService
  ) {}

  ngOnInit(): void {
    this.router.params.subscribe((params) => {
      this.showId = params['id'];
      this.type = params['type'];
      if (this.type === 'movie') {
        this.similarTitle = 'Similar Movies';
        this.show$ = this.moviesService.getMovieById(this.showId);
        this.showVideos$ = this.moviesService.getMovieVideos(this.showId);
        this.showImages$ = this.moviesService.getImageVideos(this.showId);
        this.showCasts$ = this.moviesService.getMovieCasts(this.showId);
        this.showSimilars$ = this.moviesService.getSimilarMovies(this.showId);
      } else {
        this.similarTitle = 'Similar TV Shows';
        this.show$ = this.tvShowService
          .getTvShowById(this.showId)
          .pipe(map(mapToMovie));
        this.showVideos$ = this.tvShowService.getTvShowVideos(this.showId);
        this.showImages$ = this.tvShowService.getTvShowImages(this.showId);
        this.showCasts$ = this.tvShowService.getMovieCasts(this.showId);
        this.showSimilars$ = this.tvShowService
          .getSimilarTvShows(this.showId)
          .pipe(map(mapToMovies));
      }
    });
  }
}
