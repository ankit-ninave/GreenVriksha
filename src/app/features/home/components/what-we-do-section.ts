import { Component } from '@angular/core';
import { SectionTitle } from '../../../shared/components/section-title';
import { FeatureCard } from '../../../shared/components/feature-card';

@Component({
  selector: 'app-what-we-do-section',
  imports: [SectionTitle, FeatureCard],
  templateUrl: './what-we-do-section.html',
  styleUrl: './what-we-do-section.scss',
})
export class WhatWeDoSection {
  readonly activities = [
    {
      color: 'green' as const,
      title: 'Tree Plantation Drives',
      description: 'Every Sunday morning we gather volunteers to plant native saplings across Nagpur — parks, roadside strips, schools, and vacant plots.',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
    },
    {
      color: 'blue' as const,
      title: 'Seed Collection',
      description: 'We collect, dry, and distribute seeds of native tree species to volunteers and communities for self-plantation at homes and colonies.',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>`,
    },
    {
      color: 'orange' as const,
      title: 'Cleanliness Drives',
      description: 'Alongside planting, we organize clean-up activities in public spaces, water bodies, and roadsides to create a cleaner, greener Nagpur.',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>`,
    },
    {
      color: 'purple' as const,
      title: 'Plant Protection & Care',
      description: 'Planting is only the beginning. We follow up with watering schedules, guards, and community adoption to ensure survival of every tree.',
      icon: `<svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
    },
  ];
}
