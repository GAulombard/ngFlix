import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MoviesDto } from '../shared/component/types/movie'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl = 'https://api.themoviedb.org/3'
  private apiKey = 'a1aa5ed65ee0a3246ea8bd34d740b4e9'

  constructor(private http: HttpClient) {}

  getMoviesByType(type: string) {
    return this.http.get<MoviesDto>(
      `${this.apiUrl}/movie/${type}?api_key=${this.apiKey}`
    )
  }
}
