import { Component, signal } from '@angular/core';

interface GalleryItem {
  tag: string;
  caption: string;
  date: string;
  color: string;
}

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  readonly activeTag = signal<string>('All');

  readonly tags = ['All', 'Plantation', 'Seeds', 'Cleanup', 'Community', 'Care'];

  readonly items: GalleryItem[] = [
    { tag: 'Plantation', caption: 'Futala Lake Drive', date: 'May 2026', color: '#DCFCE7' },
    { tag: 'Community', caption: 'Volunteer Team – June Drive', date: 'Jun 2026', color: '#DBEAFE' },
    { tag: 'Seeds', caption: 'Seed Collection Camp', date: 'Apr 2026', color: '#FEF9C3' },
    { tag: 'Cleanup', caption: 'Ambazari Lake Cleanup', date: 'Mar 2026', color: '#FEE2E2' },
    { tag: 'Plantation', caption: 'Seminary Hills Reforestation', date: 'Jun 2026', color: '#D1FAE5' },
    { tag: 'Community', caption: 'School Plantation Drive', date: 'Feb 2026', color: '#EDE9FE' },
    { tag: 'Care', caption: 'Follow-up Watering', date: 'Dec 2025', color: '#CCFBF1' },
    { tag: 'Plantation', caption: 'Wardha Road Drive', date: 'Jan 2026', color: '#FCE7F3' },
    { tag: 'Seeds', caption: 'Neem Seed Distribution', date: 'Nov 2025', color: '#FEF3C7' },
    { tag: 'Cleanup', caption: 'Gorewada Buffer Zone', date: 'Oct 2025', color: '#E0F2FE' },
    { tag: 'Plantation', caption: 'Rural Parseoni Village', date: 'Sep 2025', color: '#F0FDF4' },
    { tag: 'Community', caption: 'Volunteer Orientation', date: 'Aug 2025', color: '#F5F3FF' },
  ];

  get filtered() {
    const tag = this.activeTag();
    if (tag === 'All') return this.items;
    return this.items.filter((i) => i.tag === tag);
  }

  setTag(tag: string) {
    this.activeTag.set(tag);
  }
}
