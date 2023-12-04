import { Component, Input } from '@angular/core';
import { Movie } from '../../shared/component/types/movie';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  @Input() shows: Movie[] = [];
  @Input() title: string = '';
  @Input() type: string ='';
}
