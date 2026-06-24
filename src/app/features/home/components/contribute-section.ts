import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitle } from '../../../shared/components/section-title';

@Component({
  selector: 'app-contribute-section',
  imports: [RouterLink, SectionTitle],
  templateUrl: './contribute-section.html',
  styleUrl: './contribute-section.scss',
})
export class ContributeSection {
  readonly ways = [
    {
      emoji: '🙋',
      title: 'Join as Volunteer',
      desc: 'Show up every Sunday morning and plant trees alongside fellow Nagpurians.',
      link: '/volunteer',
      linkLabel: 'Register Now',
      color: 'blue',
    },
    {
      emoji: '🌿',
      title: 'Donate Saplings / Seeds',
      desc: 'Have extra saplings, seeds, or tools? Donate them to power our next drive.',
      link: '/donate',
      linkLabel: 'Donate Now',
      color: 'green',
    },
    {
      emoji: '📍',
      title: 'Request Plantation',
      desc: 'Request tree plantation in your colony, school, village, or public area.',
      link: '/request-plantation',
      linkLabel: 'Submit Request',
      color: 'orange',
    },
    {
      emoji: '💧',
      title: 'Help with Maintenance',
      desc: 'Adopt a tree near your home and help with watering and follow-up care.',
      link: '/volunteer',
      linkLabel: 'Get Involved',
      color: 'purple',
    },
  ];
}
