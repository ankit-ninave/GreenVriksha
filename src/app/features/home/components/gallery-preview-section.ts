import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitle } from '../../../shared/components/section-title';

@Component({
  selector: 'app-gallery-preview-section',
  imports: [RouterLink, SectionTitle],
  templateUrl: './gallery-preview-section.html',
  styleUrl: './gallery-preview-section.scss',
})
export class GalleryPreviewSection {
  readonly photos = [
    { tag: 'Plantation', caption: 'Futala Lake Drive – May 2026', color: '#DCFCE7' },
    { tag: 'Seeds', caption: 'Seed Collection Camp – April 2026', color: '#DBEAFE' },
    { tag: 'Cleanup', caption: 'Ambazari Cleanup – March 2026', color: '#FEF3C7' },
    { tag: 'Community', caption: 'School Plantation – Feb 2026', color: '#EDE9FE' },
    { tag: 'Plantation', caption: 'Wardha Road Drive – Jan 2026', color: '#FCE7F3' },
    { tag: 'Care', caption: 'Follow-up Watering – Dec 2025', color: '#CCFBF1' },
  ];
}
