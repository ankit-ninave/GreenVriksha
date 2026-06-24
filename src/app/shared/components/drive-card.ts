import { Component, input } from '@angular/core';

export interface DriveData {
  date: string;
  day: string;
  time: string;
  location: string;
  area: string;
  focus: string;
  bring: string[];
  status: 'upcoming' | 'ongoing' | 'completed';
}

@Component({
  selector: 'app-drive-card',
  imports: [],
  templateUrl: './drive-card.html',
  styleUrl: './drive-card.scss',
})
export class DriveCard {
  readonly drive = input.required<DriveData>();
}
