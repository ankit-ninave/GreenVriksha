import { Component } from '@angular/core';

@Component({
  selector: 'app-stats-section',
  imports: [],
  templateUrl: './stats-section.html',
  styleUrl: './stats-section.scss',
})
export class StatsSection {
  readonly stats = [
    { emoji: '🌳', value: '2,800+', label: 'Trees Planted' },
    { emoji: '👥', value: '500+', label: 'Volunteers' },
    { emoji: '📅', value: '48', label: 'Drives Done' },
    { emoji: '🗺️', value: '25+', label: 'Areas Covered' },
  ];
}
