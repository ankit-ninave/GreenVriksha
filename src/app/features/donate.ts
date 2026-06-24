import { Component } from '@angular/core';

@Component({
  selector: 'app-donate',
  imports: [],
  templateUrl: './donate.html',
  styleUrl: './donate.scss',
})
export class Donate {
  readonly donateTypes = [
    { emoji: '🌱', label: 'Saplings', desc: 'Native tree saplings ready for planting' },
    { emoji: '🌰', label: 'Seeds', desc: 'Dried seeds of native Vidarbha trees' },
    { emoji: '⛏️', label: 'Tools', desc: 'Spades, watering cans, gloves, guards' },
    { emoji: '💧', label: 'Water', desc: 'Tanker or watering support for drives' },
  ];
}
