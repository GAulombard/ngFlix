import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TvShow, TvShowDto } from '../shared/component/types/tvshow';
import { CreditDto } from '../shared/component/types/credit';
import { VideoDto } from '../shared/component/types/video';
import { ImageDto } from '../shared/component/types/image';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'a1aa5ed65ee0a3246ea8bd34d740b4e9';

  constructor(private http: HttpClient) {}

  getTvShowsByType(type: string, count = 20) {
    return this.http
      .get<TvShowDto>(`${this.apiUrl}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
  getTvShowById(id: string) {
    return this.http.get<TvShow>(
      `${this.apiUrl}/tv/${id}?api_key=${this.apiKey}`
    );
  }

  getMovieCasts(id: string) {
    return this.http
      .get<CreditDto>(`${this.apiUrl}/tv/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((data) => data.cast));
  }

  getTvShowVideos(id: string) {
    return this.http
      .get<VideoDto>(`${this.apiUrl}/tv/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results));
  }

  getTvShowImages(id: string) {
    return this.http
      .get<ImageDto>(`${this.apiUrl}/tv/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops));
  }

  getSimilarTvShows(id: string) {
    return this.http
      .get<TvShowDto>(
        `${this.apiUrl}/tv/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0,12)));
  }
}
