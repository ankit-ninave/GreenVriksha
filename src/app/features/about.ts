import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitle } from '../shared/components/section-title';

@Component({
  selector: 'app-about',
  imports: [RouterLink, SectionTitle],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  readonly values = [
    { emoji: '🌱', title: 'Community First', desc: 'Every drive is powered by Nagpurians who care about their city and its future.' },
    { emoji: '🔬', title: 'Native Species', desc: 'We plant trees native to the Vidarbha region for maximum ecological benefit.' },
    { emoji: '📋', title: 'Accountability', desc: 'We document every tree planted and share updates with our volunteer community.' },
    { emoji: '🤝', title: 'Inclusivity', desc: 'From students to seniors — anyone can join, contribute, and make a difference.' },
    { emoji: '♻️', title: 'Sustainability', desc: 'Our focus is long-term impact, not just numbers. We protect what we plant.' },
    { emoji: '📍', title: 'Local Focus', desc: 'We serve both urban Nagpur and surrounding rural areas with equal dedication.' },
  ];
}
