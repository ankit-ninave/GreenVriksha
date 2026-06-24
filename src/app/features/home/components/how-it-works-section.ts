import { Component } from '@angular/core';
import { SectionTitle } from '../../../shared/components/section-title';

@Component({
  selector: 'app-how-it-works-section',
  imports: [SectionTitle],
  templateUrl: './how-it-works-section.html',
  styleUrl: './how-it-works-section.scss',
})
export class HowItWorksSection {
  readonly steps = [
    {
      num: '01',
      title: 'Plant',
      desc: 'Every Sunday, our volunteers gather at the designated site to plant native trees in urban parks, roadsides, and rural areas.',
      color: 'green',
      icon: '🌱',
    },
    {
      num: '02',
      title: 'Protect',
      desc: 'We install tree guards, assign community caretakers, and monitor the health of each planted tree for 6 months.',
      color: 'blue',
      icon: '🛡️',
    },
    {
      num: '03',
      title: 'Preserve',
      desc: 'Our team follows up with watering support, seasonal care tips, and replanting when needed to ensure long-term survival.',
      color: 'orange',
      icon: '💚',
    },
  ];
}
