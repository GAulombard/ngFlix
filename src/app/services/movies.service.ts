import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GenresDto, Movie, MoviesDto } from '../shared/component/types/movie';
import { map } from 'rxjs';
import { VideoDto } from '../shared/component/types/video';
import { ImageDto } from '../shared/component/types/image';
import { CreditDto } from '../shared/component/types/credit';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'a1aa5ed65ee0a3246ea8bd34d740b4e9';

  constructor(private http: HttpClient) {}

  getMoviesByType(type: string, count = 20) {
    return this.http
      .get<MoviesDto>(`${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getMoviesByGenres() {
    return this.http
      .get<GenresDto>(`${this.apiUrl}/genre/movie/list?api_key=${this.apiKey}`)
      .pipe(map((data) => data.genres));
  }

  getMovieById(id: string) {
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  getMovieVideos(id: string) {
    return this.http
      .get<VideoDto>(`${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results));
  }

  getSimilarMovies(id: string) {
    return this.http
      .get<MoviesDto>(
        `${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, 12)));
  }

  getImageVideos(id: string) {
    return this.http
      .get<ImageDto>(`${this.apiUrl}/movie/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops));
  }

  getMovieCasts(id: string) {
    return this.http
      .get<CreditDto>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast));
  }

  searchMovies(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apiKey}`
    );
  }
}
