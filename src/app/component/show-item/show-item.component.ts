import { Component, Input } from '@angular/core'
import { Movie } from '../../shared/component/types/movie'
import { imagesBaseUrl } from '../../constants/images-sizes'

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrl: './show-item.component.scss',
})
export class ShowItemComponent {
  @Input() showItem: Movie | null = null
  imageBaseUrl = imagesBaseUrl
}
