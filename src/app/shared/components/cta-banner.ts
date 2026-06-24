import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cta-banner',
  imports: [RouterLink],
  templateUrl: './cta-banner.html',
  styleUrl: './cta-banner.scss',
})
export class CtaBanner {
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly primaryLabel = input<string>('Get Started');
  readonly primaryLink = input<string>('/volunteer');
  readonly secondaryLabel = input<string>('');
  readonly secondaryLink = input<string>('/contact');
  readonly variant = input<'blue' | 'green'>('blue');
}
