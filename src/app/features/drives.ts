import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitle } from '../shared/components/section-title';
import { DriveCard, DriveData } from '../shared/components/drive-card';

@Component({
  selector: 'app-drives',
  imports: [RouterLink, SectionTitle, DriveCard],
  templateUrl: './drives.html',
  styleUrl: './drives.scss',
})
export class Drives {
  readonly filter = signal<'all' | 'upcoming' | 'completed'>('all');

  readonly drives: DriveData[] = [
    {
      date: 'June 29, 2026',
      day: 'Sunday',
      time: '7:00 AM – 10:00 AM',
      location: 'Futala Lake Garden',
      area: 'Nagpur',
      focus: 'Native Tree Plantation + Lakeside Cleanup',
      bring: ['Water bottle', 'Gloves', 'Small shovel'],
      status: 'upcoming',
    },
    {
      date: 'June 22, 2026',
      day: 'Sunday',
      time: '7:00 AM – 10:00 AM',
      location: 'Ambazari Lake Garden',
      area: 'Nagpur',
      focus: 'Seed Collection + Planting',
      bring: ['Water bottle', 'Seed bags', 'Gloves'],
      status: 'upcoming',
    },
    {
      date: 'June 15, 2026',
      day: 'Sunday',
      time: '7:00 AM – 9:30 AM',
      location: 'Seminary Hills',
      area: 'Nagpur',
      focus: 'Reforestation Drive',
      bring: [],
      status: 'completed',
    },
    {
      date: 'June 8, 2026',
      day: 'Sunday',
      time: '7:00 AM – 10:00 AM',
      location: 'Government Polytechnic',
      area: 'Kamptee Road, Nagpur',
      focus: 'School Campus Greening',
      bring: [],
      status: 'completed',
    },
    {
      date: 'June 1, 2026',
      day: 'Sunday',
      time: '6:30 AM – 10:00 AM',
      location: 'Gorewada Forest Buffer Zone',
      area: 'Nagpur',
      focus: 'Large-scale Plantation (150 Trees)',
      bring: [],
      status: 'completed',
    },
    {
      date: 'May 25, 2026',
      day: 'Sunday',
      time: '7:00 AM – 9:30 AM',
      location: 'Parseoni Village',
      area: 'Rural Nagpur',
      focus: 'Rural Village Planting Drive',
      bring: [],
      status: 'completed',
    },
  ];

  get filteredDrives() {
    const f = this.filter();
    if (f === 'all') return this.drives;
    return this.drives.filter((d) => d.status === f);
  }

  setFilter(f: 'all' | 'upcoming' | 'completed') {
    this.filter.set(f);
  }
}
