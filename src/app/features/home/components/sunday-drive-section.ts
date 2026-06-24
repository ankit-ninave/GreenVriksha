import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitle } from '../../../shared/components/section-title';

@Component({
  selector: 'app-sunday-drive-section',
  imports: [RouterLink, SectionTitle],
  templateUrl: './sunday-drive-section.html',
  styleUrl: './sunday-drive-section.scss',
})
export class SundayDriveSection {
  readonly drive = {
    date: 'Sunday, June 29, 2026',
    time: '7:00 AM – 10:00 AM',
    location: 'Futala Lake Garden, Nagpur',
    focus: 'Native Tree Plantation + Lakeside Cleanup',
    coordinator: 'GreenVriksha Team',
    bring: ['Water bottle', 'Comfortable shoes', 'Gloves (optional)', 'Small shovel if available'],
    slots: 40,
    registered: 27,
  };

  get slotsPercent() {
    return Math.round((this.drive.registered / this.drive.slots) * 100);
  }
}
