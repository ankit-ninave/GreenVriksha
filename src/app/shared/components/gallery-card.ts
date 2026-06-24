import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  imports: [],
  templateUrl: './gallery-card.html',
  styleUrl: './gallery-card.scss',
})
export class GalleryCard {
  readonly imageUrl = input.required<string>();
  readonly caption = input<string>('');
  readonly tag = input<string>('');
}
