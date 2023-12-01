import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MoviesDto } from '../shared/component/types/movie'

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get<MoviesDto>(
      'https://api.themoviedb.org/3/movie/popular?api_key=a1aa5ed65ee0a3246ea8bd34d740b4e9'
    )
  }
}
