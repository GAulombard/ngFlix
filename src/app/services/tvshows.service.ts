import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TvShowDto } from '../shared/component/types/tvshow';

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
}
