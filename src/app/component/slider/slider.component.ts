import { Component, OnInit } from '@angular/core'
import { MoviesService } from '../../services/movies.service'
import { animate, state, style, transition, trigger } from '@angular/animations'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.scss',
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  constructor(private moviesService: MoviesService) {}

  movies$ = this.moviesService.getPopularMovies()

  slideIndex = 0

  ngOnInit(): void {
    setInterval(() => {
      this.slideIndex += 1
    }, 5000)
  }
}
